Template.loginScreen.events({
	'click .button-login' : function(e, t) {
		var email = t.find('.login-email').value,
			password = t.find('.login-password').value;

			APP.Login.login.call(this, email, password);
	}
});