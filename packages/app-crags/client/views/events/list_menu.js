Template.appCragListRightMenu.events({
	'change .country-picker select': function(event, template) {
		var $select = $(event.currentTarget);
		var id = $select.find(":selected").attr("name");
		
		APP.CragsList.search(""+id+"", {filters: {
			country: 1
		}});
	}
});