APP.Climbpooling = (function(){
	var feed = new ReactiveVar("local");

	return {
		feed: feed,
		getCurrentFeedName: function(){
			return "Climbpooling_"+feed.get();
		}
	};
})();

APP.Climbpooling_local = new APP.PositionStream({
	name: "climbpooling_local",
	types: ["climbpooling"],
	collection: "posts"
});


APP.Climbpooling_global = new APP.FixedStream({
	name: "climbpooling_global",
	collection: "posts",
	types: ["climbpooling"],
	position: { //TODO default location is Poznan, provida a way to create fixed stream from the user current position
		type: "Point",
		coordinates: [52.4005285,16.9016658]
	},
	radius: 800 //TODO, UI - changing radius to match country, continent etc
});