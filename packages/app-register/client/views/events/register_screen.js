Template.registerScreen.events({
	'click .button-register' : function(e, t) {
		var name = t.find('.register-name').value,
			email = t.find('.register-email').value,
			password = t.find('.register-password').value;

			APP.Register.createUser.call(this, name, email, password);
	}
});