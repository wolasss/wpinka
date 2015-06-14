Template.appMarketRightMenu.events({
	"change .range-from, change .range-to": function(e, tpl) {
		var text = $(e.currentTarget).val();
		var from = parseInt($(tpl.find('.range-from')).val(),10);
		var to = parseInt($(tpl.find('.range-to')).val(),10);

		console.log("from: ", from, "to: ", to);
		var filters = {};

		if(from && !to) {
			filters.price = {
				$gte: from
			}
		} else if(!from && to) {
			filters.price = {
				$lte: to
			}
		} else if (from && to) {
			filters.price = {
				$gte: from,
				$lte: to
			}
		};

		if(APP.Market.getCurrentFeedName() == "Market_global") filters.global = true;

		APP[APP.Market.getCurrentFeedName()].filters.set(filters);
	},
	'change .category-select': function(e, t) {
		var select = $(e.currentTarget);
		var name = select.find(':selected').attr('name');
		var filters = {};

		if(name) filters.category = select.val();

		if(APP.Market.getCurrentFeedName() == "Market_global") filters.global = true;

		APP[APP.Market.getCurrentFeedName()].filters.set(filters);
	}
});

//TODO consider other filters so that multiple filters work as AND logical function
//TODO category inserted into post should be NAME not translated VALUE 