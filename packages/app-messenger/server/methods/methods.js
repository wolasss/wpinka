Meteor.methods({
	"/messenger/add": function(document) {
		console.log("thread: ", document);
		check(document, {
			name: String,
			participants: Array
		});

		return APP.Messenger.collection.insert(document);
	}
});