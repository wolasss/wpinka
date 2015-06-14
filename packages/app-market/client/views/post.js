Template.post_market.rendered = function() {
	APP[APP.Market.getCurrentFeedName()].seenAck();
};

Template.post_market.helpers({
	formattedDate: function() {
		return moment(this.when).format("ll");
	},
	isNotAuthorMe: function(){
		return isNotAuthorMe.call(this)
	},
	getQuery: function(){
		return 'author=' + this.author + '&name=' + this.title; 
	},
});

var isNotAuthorMe = function(){
	return this.author !== Meteor.userId();
};