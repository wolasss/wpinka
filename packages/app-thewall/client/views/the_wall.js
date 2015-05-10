Template.appTheWall.created = function () {
	APP.TheWall.subscribe(true, this);
};

Template.appTheWall.rendered = function() {
	this.autorun(function () {
		if (!this.subscriptionsReady()) {
			if(!IonLoading.view) IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}.bind(this));
};