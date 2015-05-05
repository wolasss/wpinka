APP.RouterHelpers = {

	loginCheck: function(next, success, error) {
		if(!success) success = function(){};
		if(!error) error = function(){};

		if(!Meteor.user() && !Meteor.loggingIn()) {
			Router.go('/');
			error.call(this);
		} else {
			success.call(this);
		}
		next();
	}

};