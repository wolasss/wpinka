Meteor.publish("crag", function(id){
	check(id, Match.Where(function(){
		return typeof id === "string" || id instanceof Array;
	}));
	
	if(id instanceof Array) {
		return APP.CragsCollection.find({id: { $in : id }});
	}
	
	return APP.CragsCollection.find({id: id});
});