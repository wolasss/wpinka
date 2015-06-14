Template.thread.helpers({
	name: function(){
		var thread = APP.Messenger.getThread(this.id);
		return thread && thread.name;
	},
	newMessageForm: function(){
		return new SimpleSchema({
			content: {
				type: String,
				max: 500,
				autoform: {
					label: false,
					rows: 3,
					class: "thread__message-form",
					placeholder: TAPi18n.__("writeMessage")
				}
			}
		});
	},
	buttonContent: function(){
		return TAPi18n.__("sendMessage");
	}
});

Template.thread.created = function(){
	this.subscribe('thread', this.data.id);
};

AutoForm.hooks({
  'newMessageForm': {
    onSubmit: function (message, result, template) {
    	var threadId = UI._parentData(7).id;
			APP.Messages.insert(message, threadId, function(error, result){
				if(error) {
					console.log(error);
					// TODO add alert
				}
			});

			this.done();
			return false;
		},

		onError: function(operation, error, template) {
			console.log(error);
			//TODO alert and translation of the errors
			return false;
		}
	}
});