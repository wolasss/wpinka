Template.appClimbpooling.created = function () {
	if(APP.Climbpooling.currentSub) APP.Climbpooling.currentSub.stop();

	APP.Climbpooling.currentSub = APP[APP.Climbpooling.getCurrentFeedName()].subscribe(true, this);
};

Template.appClimbpooling.rendered = function() {
	this.autorun(function () {
		if (!this.subscriptionsReady()) {
			if(!IonLoading.view) IonLoading.show();
		} else {
			IonLoading.hide();
			setTimeout(function(){
				$('.loading-container.visible').remove();
			}, 400); //workaround...
		}
	}.bind(this));
};