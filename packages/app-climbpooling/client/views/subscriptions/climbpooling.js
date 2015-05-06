Template.appClimbpooling.created = function () {
	APP.Climbpooling.subscribe(true, this);
};

Template.appClimbpooling.rendered = function() {
	this.autorun(function () {
		if (!this.subscription.ready()) {
			if(!IonLoading.view) IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}.bind(this));
};