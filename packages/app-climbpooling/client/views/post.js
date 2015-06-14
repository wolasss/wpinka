Template.post_climbpooling.rendered = function() {
	APP[APP.Climbpooling.getCurrentFeedName()].seenAck();
};

Template.post_climbpooling.helpers({
	formattedDate: function() {		
		return moment(this.when).format("ll");
	},
	rideOffer: function() {
		return TAPi18n.__("rides."+this.ride);
	},
	getViaNames: function() {
		console.log(this);
		if(this.via) return "via " + _.pluck(this.via, 'name').join(", ");
	},
	getQuery: function(){
		var name = constructNewThreadName.call(this);
		return 'author=' + this.author + '&name=' + name; 
	},
	isNotAuthorMe: function(){
		return isNotAuthorMe.call(this)
	}
});

var constructNewThreadName = function(){
	var result = TAPi18n.__("from");
	result += " " + this.from.name;
	result += " " + TAPi18n.__("to");
	result += " " + this.to.name;
	result += " " + this.when.toDateString();
	return result;
};

var isNotAuthorMe = function(){
	return this.author !== Meteor.userId();
};