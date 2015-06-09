var getGeoJSONFromString = function(str) {
	var geoJSON = { type: "Point" };
	var coords = str.split(";");
	
	if(coords[1]) {
		geoJSON.coordinates = coords[1].split(",");
		if(geoJSON.coordinates.length == 2) {
			geoJSON.coordinates[0] = parseFloat(geoJSON.coordinates[0]);
			geoJSON.coordinates[1] = parseFloat(geoJSON.coordinates[1]);
			
			return geoJSON;
		}
	}

	return false;
};

var getLocationObjectFromString = function(str) {
	var obj = {};
	var sp = str.split(";");

	var geoJSON = getGeoJSONFromString(str);

	if(geoJSON) obj.geoJSONPoint = geoJSON;
	if(sp[0]) obj.name = sp[0];

	return obj;
};

Meteor.methods({
	"/climbpooling/add": function(post, position) {
		console.log(post, position);

		var postEpsilon = 10000; // epsilon distance in meters
		
		check(post, Object);
		check(post.content, String);
		check(post.partner, Boolean);
		check(post.gear, Boolean);
		check(post.when, Date);
		check(post.from, String); //to be fixed after lib bug is resolved
		check(post.to, String); //to be fixed after lib bug is resolved

		check(position, {
			type: String,
			coordinates: Array
		});

		check(post.content, Match.Where(APP.Validators.isNotEmptyString));
		check(post.content, Match.Where(APP.Validators.isContentNotTooShort));
		check(post.content, Match.Where(APP.Validators.isContentNotTooLong));

		post.from = getLocationObjectFromString(post.from);
		post.to = getLocationObjectFromString(post.to);

		var retPost = {
			content: post.content,
			when: post.when,
			ride: post.ride,
			gear: post.gear,
			from: post.from,
			to: post.to,
			partner: post.partner,
			type: "climbpooling"
		};

		if(!post.from.geoJSONPoint && !post.to.geoJSONPoint) {
			//if there is no coordinates for from and to locations we position the post with current user position
			console.log("no positions provided, creating with fallback");
			return APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, position);
		} else {
			//if not we are creating multiple posts for each location

			if(post.from.geoJSONPoint && post.to.geoJSONPoint) {
				//if they are both check the distance between them
				console.log("checking distance between the points");

				if(GeoJSON.pointDistance(post.from.geoJSONPoint, post.to.geoJSONPoint) > postEpsilon ) {
					console.log("more than epsilon creating both");

					APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, post.to.geoJSONPoint);
					return APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, post.from.geoJSONPoint);
				} else {
					console.log("less than epsilon only one");

					return APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, post.from.geoJSONPoint);
				}

			} else {
				console.log("only one point has a geojson");

				if(post.from.geoJSONPoint) {
					APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, post.from.geoJSONPoint);
				}

				if(post.to.geoJSONPoint) {
					APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, post.to.geoJSONPoint);
				}

				return true;
			}
		}
	}
});