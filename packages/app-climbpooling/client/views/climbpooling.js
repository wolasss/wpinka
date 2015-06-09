Template.appClimbpooling.helpers({
	isActiveFeed: function(f) {
		return ( f == APP.Climbpooling.feed.get() ? "active" : "" );
	}
});