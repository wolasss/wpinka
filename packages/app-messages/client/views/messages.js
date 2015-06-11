Template.appMessages.helpers({
	messages: function(){
		return APP.Messages.getMessagesForThread(this.threadId);
	}
});

Template.appMessages.created = function(){
	this.subscribe('messages', this.data.threadId);
};

Template.appMessages.rendered = function(){
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