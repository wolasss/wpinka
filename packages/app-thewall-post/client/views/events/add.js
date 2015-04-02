Template.appTheWallAdd.events({
	'click button.button-save': function(e, t){
		var content = t.find('.post__form').value;
		if(APP.Validators.isEmptyString(content))
			Alerts.error(TAPi18n.__("theWallPostErrors.mustHaveContentError"), 'appthewalladd');
		else if(APP.Validators.isContentTooShort(content))
			Alerts.error(TAPi18n.__("theWallPostErrors.minimumLengthError"), 'appthewalladd');
		else if(APP.Validators.isContentTooLong(content))
			Alerts.error(TAPi18n.__("theWallPostErrors.maximumLengthError"), 'appthewalladd');
		else
			APP.TheWall.insert(content);
	}
});