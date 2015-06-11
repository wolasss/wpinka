Meteor.publish('messages', function(threadId){
	check(threadId, String);
	var thread = Mongo.Collection.get('threads').findOne(threadId);
	if(_.indexOf(thread.participants, this.userId) > -1){
		return APP.Messages.collection.find({ threadId: threadId });
	} else {
		return [];
	}
});