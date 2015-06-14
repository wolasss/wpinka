Template.newThread.helpers({
	newThreadForm: function(){
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

AutoForm.hooks({
  'newThreadForm': {
    onSubmit: function (message, result, template) {
    	var templateContext = UI._parentData(7),
    			thread = {
    		participants: [templateContext.author],
    		name: templateContext.name
    	}
			APP.Messenger.insert(thread, message, function(error, result){
				if(error) {
					console.log(error);
					// TODO add alert
				} else {
					Router.go('/messenger/' + result);
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