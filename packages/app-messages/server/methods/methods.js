Meteor.methods({
	"/messages/add": function(document, threadId) {
		console.log("message: ", document);
		console.log("thread: ", threadId);
		
		check(document, Object);
		check(document.content, String);
		check(document.content, Match.Where(APP.Validators.isNotEmptyString));
		check(document.content, Match.Where(APP.Validators.isContentNotTooLong));
		check(threadId, String);

		document.from = Meteor.userId();
		document.createdAt = new Date();
		return APP.Messages.collection.insert(document);
	}
});