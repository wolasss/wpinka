APP.Stream = function(config) {
	
	var self = this;

	this.config = {
		name: "posts",
		collection: "posts", //can be an array?
		radius: 10, // in km,
		minRadius: 1,
		maxRadius: 50,
		stepRadius: 1,
		autoupdate: true,
		limit: 10,
		epsilon: 10, //percent of the radius
		position: {
			type: "point",
			coordinates: [52.4005285,16.9016658]
		}
	};

	_.extend(this.config, this.config, config);

	this.seenPosts = new ReactiveVar(0);
	this.radius = new ReactiveVar(self.config.radius);
	this.position = new ReactiveVar(self.config.position);

	this.collection = new Mongo.Collection(self.config.collection);

	if(Meteor.isServer) {
		try {
			self.collection._ensureIndex({ location: "2dsphere", createdAt: -1 });
		} catch(e) {
			console.log(e);
		}
	}

	this.seenAck = function() {
		this.seenPosts.set(this.seenPosts.get()+1);
	};

	this.getPosts = function() {
		return self.collection.find({}, {limit: self.config.limit, sort: {createdAt: -1}});
	};

	this.changeRadius = function(radius) {
		if(isNaN(radius)) {
			throw new Error("radius is not a number");
		}

		self.radius.set(radius);
	};

	this.changePosition = function(position) {
		self.position.set(position);
	};

	this.subscribe = function() {
		if(Meteor.isClient) {
			Tracker.autorun(function(){
				var sub = Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
			});
		}
	};

	if(Meteor.isClient && self.config.autoupdate) {
		this.subscribe();

		Tracker.autorun(function(){
			var current = APP.Position.current;
			var position = current.get();
			if(position) {
				self.changePosition(position);
			}
		});
	}

	this.publish = function() {
		if(Meteor.isServer) {
			Meteor.publish("stream_"+self.config.name, function(position, radius){
				check(position, Object);
				check(radius, Number);
				
				console.log("New publish: radius: ", radius/6371, "position: ", position.coordinates);

				return self.collection.find({
					location: { $geoWithin: { $centerSphere: [ [ position.coordinates[0], position.coordinates[1] ] , radius / 6371 ] }}, // 1 degree ~ 69 miles ~ 111.2 km
				},{
					limit: self.config.limit,
					sort: {createdAt: -1}
				});
			});
		}
	};

	if(Meteor.isClient){
		this.insert = function(content, callback) {
			var position = APP.Position.getCurrent() || APP.Position.fetchCurrent();
			console.log("insertuje", position);
			if(position){
				Meteor.call('/thewall/add', position, content, 'TheWall', function(error){
					callback(error);
				});
			} else {
				APP.Position.openPositionModalAlert({
					locationEnabled: 1,
					locationAuthorized: 1
				});
			}
		};
	};
};