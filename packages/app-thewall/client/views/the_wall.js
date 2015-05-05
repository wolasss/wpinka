Template.appTheWall.created = function () {
	this.autorun(function () {
		this.subscription = APP.TheWall.subscribe(true);
	}.bind(this));
};

Template.appTheWall.rendered = function() {
	this.autorun(function () {
		if (!this.subscription.ready()) {
			IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}.bind(this));
};