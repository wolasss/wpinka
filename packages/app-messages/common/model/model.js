(function(){
	var config = {
  	collectionName: "messages"
  }

	if ('undefined' === typeof APP.Messages) {
    APP.Messages = {
    	collection: Mongo.Collection.get(config.collectionName),
    	getMessagesforThread: function(threadId){
    		return this.collection.find({ threadId: threadId });
    	},
    	insert: function(document, threadId, callback){
    		if(!callback){
	  			callback = function(){};
	  		}
				Meteor.call("/messages/add", document, threadId, function(err){
					callback.call(null, err, data);
				});
    	}
    };
  }
	if(!APP.Messages.collection) {
		APP.Messages.collection = new Mongo.Collection(config.collectionName); 
	}	
})();