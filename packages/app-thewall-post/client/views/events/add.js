Template.appTheWallAdd.events({
	'click button.button-save': function(e, t){
		var content = t.find('.post__form').value;
		if(!APP.Validators.isNotEmptyString(content)){
			Alerts.error(TAPi18n.__("theWallPostErrors.mustHaveContentError"), 'appthewalladd');
		} else if(!APP.Validators.isContentNotTooShort(content)){
			Alerts.error(TAPi18n.__("theWallPostErrors.minimumLengthError"), 'appthewalladd');
		} else if(!APP.Validators.isContentNotTooLong(content)){
			Alerts.error(TAPi18n.__("theWallPostErrors.maximumLengthError"), 'appthewalladd');
		} else {
			APP.TheWall.insert({ content: content }, function(error){
				if(error) {
					Alerts.error(TAPi18n.__("theWallPostErrors.internalError"), 'appthewalladd');
				} else {
					history && history.back();
				}
			});
		}
	}
});