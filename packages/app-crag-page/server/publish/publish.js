Meteor.publish("crag", function(id){
	check(id, String);
	return APP.CragsCollection.find({id: id});
});