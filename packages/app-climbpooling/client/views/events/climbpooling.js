Template.appClimbpooling.events({
	'click .feed-picker': function(e, t) {
		APP.Climbpooling.currentSub.stop();
		APP.Climbpooling.feed.set(e.currentTarget.getAttribute("data-feed"));
		APP.Climbpooling.currentSub = APP[APP.Climbpooling.getCurrentFeedName()].subscribe(true, t);
	}
});