Template.appCragListRightMenu.events({
	'change .country-picker select': function(event, template) {
		var $select = $(event.currentTarget);
		var id = $select.find(":selected").attr("name");
		
		APP.CragsList.search(""+id+"", {filters: {
			country: 1
		}});
	},
	"change .range-from, change .range-to": function(e, tpl) {
		var text = $(e.currentTarget).val();
		var from = parseInt($(tpl.find('.range-from')).val(),10);
		var to = parseInt($(tpl.find('.range-to')).val(),10);

		var filters = {
			distance: {}
		};
		console.log("from: ", from, "to: ", to);

		if(!isNaN(from)) {
			filters.distance.minDistance = from;
		}

		if(!isNaN(to)) {
			filters.distance.maxDistance = to;
		}

		APP.CragsList.search("distance"+from+to, {currentPosition: APP.Position.current.get(), filters: filters}); //"distance"+from+to -> hack to check if its different search
		
	}
});