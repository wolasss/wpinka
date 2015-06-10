Template.thread.helpers({
	threadId: function(){
		return Router.current().url.split('/').pop();
	}
})