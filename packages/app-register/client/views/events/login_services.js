Template.loginServices.events({
	'click .login-with-facebook': function(e, t) {
		APP.Register.loginWithFacebook.call(this);
	},
	'click .login-with-google': function(e, t) {
		console.log("b");
	}
});