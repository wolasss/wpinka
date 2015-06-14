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
  	getThreads: function(sortOptions){
  		return this.collection.find({}, { sort: sortOptions });
  	},
  	insert: function(thread, message, callback){
  		if(!callback){
  			callback = function(){};
  		}
			Meteor.call("/messenger/add", thread, message, function(err, data){
				callback.call(null, err, data);
			});
  	}
  });
	
})();
