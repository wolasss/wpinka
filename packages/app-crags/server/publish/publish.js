Meteor.publish("mapCrags", function(box){
	check(box, Match.Where(function(){
		return box[0] && box[1];
	}));
	
	console.log("crags for box: ", box);

	return APP.CragsCollection.find({depth: "3", "geometry.geoJSONPoint": {$geoWithin: {
        $box: box
    }}}, {
		fields: {
			"geometry.lat": 1,
			"geometry.long": 1,
			"geometry.geoJSONPoint": 1,
			"id": 1,
			"name": 1
		}
    });
});