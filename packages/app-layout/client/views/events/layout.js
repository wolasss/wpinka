Template.layout.events({
	'click .button-logout': function(e, t) {
		Meteor.logout();
	}
});