Template.appMarketRightMenu.events({
	"change .range-from, change .range-to": function(e, tpl) {
		var text = $(e.currentTarget).val();
		var from = parseInt($(tpl.find('.range-from')).val(),10);
		var to = parseInt($(tpl.find('.range-to')).val(),10);

		console.log("from: ", from, "to: ", to);

		
	}
});