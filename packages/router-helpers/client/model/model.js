APP.RouterHelpers = {

	loginCheck: function(next, success, error) {		
		if(!success) success = function(){};
		if(!error) error = function(){};

		if(!Meteor.user() && !Meteor.loggingIn()) {
			Router.go('/');
			success.call(null);
		} else {
			error.call(null);
		}
		next();
	}

};