Template.appMarket.created = function () {
	if(APP.Market.currentSub) APP.Market.currentSub.stop();

	APP.Market.currentSub = APP[APP.Market.getCurrentFeedName()].subscribe(true, this);
};

Template.appMarket.rendered = function() {
	this.autorun(function () {
		console.log("sub ", this.subscriptionsReady())
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