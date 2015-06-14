Meteor.publish('threads', function(){
	return APP.Messenger.collection.find({ participants: { $in: [this.userId] } });
});

Meteor.publish('thread', function(threadId){
	check(threadId, String);
	return APP.Messenger.collection.find({ _id: { $in: [threadId] }, participants: { $in: [this.userId] } });
});