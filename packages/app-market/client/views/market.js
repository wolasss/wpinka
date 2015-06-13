Template.appMarket.helpers({
	isActiveFeed: function(f) {
		return ( f == APP.Market.feed.get() ? "active" : "" );
	}
});