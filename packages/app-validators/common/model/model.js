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
	isNotEmptyString: function(content){
		if(typeof content == "string" && content.length == 0){
			return false;
		}
		return true;
	},
	isContentNotTooShort: function(content){
		if(typeof content == "string" && content.length < 10){
			return false;
		}
		return true;
	},
	isContentNotTooLong: function(content){
		if(typeof content == "string" && content.length > 512){
			return false;
		}
		return true;
	}
});