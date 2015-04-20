Template.appCragListRightMenu.helpers({
	country: function() {
		return APP.Countries.collection.find({}, {sort: {name: 1}});
	}
});