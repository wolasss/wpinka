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