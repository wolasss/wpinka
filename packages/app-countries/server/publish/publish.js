Meteor.publish("countryList", function(){
	return APP.Countries.collection.find({}, {fields: {id: 1, name: 1, countryCode: 1}});
});