Template.appMarket.created = function () {
	if(APP.Market.currentSub) APP.Market.currentSub.stop();

	APP.Market.currentSub = APP[APP.Market.getCurrentFeedName()].subscribe(true, this);
};

Template.appMarket.rendered = function() {
	this.autorun(function () {
		if (!this.subscriptionsReady()) {
			if(!IonLoading.view) IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}.bind(this));
};