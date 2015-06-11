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
	}
});