Template.appMessenger.helpers({
	threads: function(){
		return APP.Messenger.getThreads();
	}
});

Template.appMessenger.created = function(){
	this.subscribe('threads');
};

Template.appMessenger.rendered = function(){
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