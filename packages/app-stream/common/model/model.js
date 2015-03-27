APP.Stream = function(config) {
	
	var self = this;

	this.config = {
		name: "posts",
		collection: "posts", //can be an array?
		radius: 5, // in km,
		autoupdate: true,
		position: {
			type: "point",
			coordinates: [52.4005285,16.9016658]
		}
	};

	_.extend(this.config, this.config, config);

	this.radius = new ReactiveVar(self.config.radius);
	this.position = new ReactiveVar(self.config.position);

	this.collection = new Mongo.Collection(self.config.collection);

	if(Meteor.isServer) {
		try {
			self.collection._ensureIndex({ location: "2dsphere" });
		} catch(e) {
			console.log(e);
		}
	}

	this.getPosts = function() {
		return self.collection.find();
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
				Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
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

				return self.collection.find({
					location: { $geoWithin: { $center: [ [ position.coordinates[0], position.coordinates[1] ] , radius ] }}
				});
			});
		}
	};
};
