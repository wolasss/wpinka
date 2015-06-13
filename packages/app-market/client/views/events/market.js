Template.appMarket.events({
	'click .feed-picker': function(e, t) {
		APP.Market.currentSub.stop();
		APP.Market.feed.set(e.currentTarget.getAttribute("data-feed"));
		APP.Market.currentSub = APP[APP.Market.getCurrentFeedName()].subscribe(true, t);
	}
});