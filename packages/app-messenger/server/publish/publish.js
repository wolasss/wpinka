Meteor.publish('threads', function(){
	return APP.Messenger.collection.find({ participants: { $in: [this.userId] } });
});