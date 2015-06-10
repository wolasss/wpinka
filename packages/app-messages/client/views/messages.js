Template.appMessages.helpers({
	messages: function(){
		return APP.Messages.getMessagesForThread(this.threadId);
	}
});