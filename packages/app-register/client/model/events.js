_.extend(APP.Register, {

	createUser: function(name, email, password) {
		if(!name) {
			Alerts.error('Name not specified', 'registerForm');
			return;
		}

		if(!email) {
			Alerts.error('E-mail not specified', 'registerForm');
			return;
		}

		if(!password) {
			Alerts.error('Password not specified', 'registerForm');
			return;
		}

		Accounts.createUser({
			username: email,
			email: email,
			password: password,
			profile: {
				name: name
			}
		}, function(err){
			console.log(err);
			if(err) {
				Alerts.error('Registration error: '+err.reason, 'registerForm');
			} 
		});
	}

});