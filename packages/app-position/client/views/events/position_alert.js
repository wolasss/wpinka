Template.positionAlert.events({
	'click .position-request' : function(event, template) {
		if(Meteor.isCordova) {
			cordova.plugins.diagnostic.switchToLocationSettings();
		} else {
			APP.Position.fetchCurrent();
		}
	}
});