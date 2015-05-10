Template.appTheWall.created = function () {
	APP.TheWall.subscribe(true, this);
};

Template.appTheWall.rendered = function() {
	var showLoading = _.debounce(function(){
		IonLoading.show()
	}, 10);

	this.autorun(function () {
		/* workaround until its fixed in meteoric... */
		if (!this.subscriptionsReady()) {
			if(!IonLoading.view) {
				showLoading();
			}
		} else {
			setTimeout(function(){IonLoading.hide()}, 50);
		}
	}.bind(this));
};