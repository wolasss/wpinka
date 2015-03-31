Template.noposition.events({
	'click .position-request' : function(event, template) {
		APP.Position.fetchCurrent();
	}
});