APP.Market = (function(){
	var feed = new ReactiveVar("local");

	return {
		feed: feed,
		getCurrentFeedName: function(){
			return "Market_"+feed.get();
		},
		getCategoryOptiones: function() {
	        return [
	          {label: TAPi18n.__("categories.shoes"), value: "shoes"},
	          {label: TAPi18n.__("categories.ropes"), value: "ropes"},
	          {label: TAPi18n.__("categories.carabiners"), value: "carabiners"},
	          {label: TAPi18n.__("categories.harness"), value: "harness"},
	          {label: TAPi18n.__("categories.others"), value: "others"}
	        ];
		}
	};
})();

APP.Market_local = new APP.PositionStream({
	name: "market_local",
	types: ["market"],
	collection: "posts"
});


APP.Market_global = new APP.FixedStream({
	name: "market_global",
	collection: "posts",
	types: ["market"],
	position: { //TODO default location is Poznan, provida a way to create fixed stream from the user current position
		type: "Point",
		coordinates: [52.4005285,16.9016658]
	},
	radius: 800 //TODO, UI - changing radius to match country, continent etc
});

if(Meteor.isClient) {

	/* This is actually workaround for now, this should happen on the server side in the publish function */
	APP.Market_global.getPosts = function() {
		return this.collection.find({global: true}, {limit: this.config.limit, sort: {createdAt: -1}});
	};

}