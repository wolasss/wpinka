Template.appTheWallAdd.events({
	'click button.button-save': function(e, t){
		var content = t.find('.post__form').value;
		if(APP.Validators.isEmptyString(content))
			Alerts.error('Your post must have content', 'appthewalladd');
		else if(APP.Validators.isContentTooShort(content))
			Alerts.error('Your post must have at least 50 characters', 'appthewalladd');
		else if(APP.Validators.isContentTooLong(content))
			Alerts.error('You have exceeded the maximum character limit', 'appthewalladd');
		else
			APP.TheWall.insert(content);
	}
});