(function(){
	if ('undefined' === typeof APP.Messenger) {
    APP.Messenger = {};
  }
  var config = {
  	collectionName: "threads",
  };

  APP.Messenger.collection = Mongo.Collection.get(config.collectionName);
  if(!APP.Messenger.collection) {
    APP.Messenger.collection = new Mongo.Collection(config.collectionName); 
  }

  _.extend(APP.Messenger, {
  	getThreads: function(){
  		return this.collection.find();
  	},
  	insert: function(collection, document, callback){
  		if(!callback){
  			callback = function(){};
  		}
			Meteor.call("/messenger/add", document, function(err){
				callback.call(null, err, data);
			});
  	}
  });
	
})();
