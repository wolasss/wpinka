Meteor.publish("crag", function(id){
	check(id, Match.Where(function(){
		return typeof id === "string" || id instanceof Array;
	}));
	
	if(id instanceof Array) {
		return APP.CragsCollection.find({id: { $in : id }});
	}
	
	return APP.CragsCollection.find({id: id}, {fields: {
		"averageHeight": 1,
		"displayAverageHeight": 1,
		"ascents": 1,
		"childIDs": 1,
		"name": 1,
		"asciiName": 1,
		"urlStub": 1,
		"urlAncestorStub": 1,
		"ascentCount": 1,
		"numberPhotos": 1,
		"isCountty": 1,
		"depth": 1,
		"seasonality": 1,
		"geometry": 1,
		"id": 1
	}});
});