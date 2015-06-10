//TODO move it to more appropriate place or find better solution
Meteor.startup(function() {
	Meteor.subscribe('users');
});