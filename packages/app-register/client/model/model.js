_.extend(APP.Register, {
	afterLogin: function() {
		Router.go('/thewall');
		APP.Position.checkPositionSettings();
	},
	afterLogout: function() {
		Router.go('/');
	}
});