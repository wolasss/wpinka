_.extend(APP.Login, {
	login: function(email, password) {

		if(!email) {
			Alerts.error('E-mail not specified', 'loginForm');
			return;
		} else {
			if(!APP.Validators.email(email)) {
				Alerts.error('Provided e-mail is wrong', 'loginForm');
				return;
			}
		}

		if(!password) {
			Alerts.error('Password not specified', 'loginForm');
			return;
		}

		Meteor.loginWithPassword(email, password, function(err){
			if(err) {
				Alerts.error('Login error: '+err.reason, 'loginForm');
			} else {
				Router.go('/');
			}
		});

	}
});