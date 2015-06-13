Template.post_market.rendered = function() {
	APP[APP.Market.getCurrentFeedName()].seenAck();
};

Template.post_market.helpers({
	formattedDate: function() {
		return moment(this.when).format("ll");
	}
});