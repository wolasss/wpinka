Meteor.methods({
	"/messenger/add": function(document, message) {
		console.log("thread: ", document);
		check(document, {
			name: String,
			participants: Array
		});
		check(message, Object);
		check(message.content, String);

		document.participants.push(Meteor.userId());

		return APP.Messenger.collection.insert(document, function(err, result){
			if(!err){
				APP.Messages.insert(message, result);
			}
		});
	}
});