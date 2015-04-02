APP.Validators = {};

_.extend(APP.Validators, {
	email: function(email) {
		var ret = false;

		if(typeof(email) == "string" && email) {

			var re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/mig;
			ret = re.test(email);
		}

		return ret;
	},
	isEmptyString: function(content){
		if(content.length == 0)
			return true;
		return false;
	},
	isContentTooShort: function(content){
		if(content.length < 10)
			return true;
		return false;
	},
	isContentTooLong: function(content){
		if(content.length > 512)
			return true;
		return false;
	}
});