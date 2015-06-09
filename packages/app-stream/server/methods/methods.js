APP.Stream.addPost = function(collection, extendedPost, position) {
	check(collection, Mongo.Collection);
	check(extendedPost, Object);
	check(position, {
		type: String,
		coordinates: Array
	});

	var date = new Date();
	
	var post = {
		createdAt: date, 
		modifiedAt: date,
		author: this.userId, 
		location: position
	};

	_.extend(post, post, extendedPost); //extending of stream specific fields

	return collection.insert(post);		
};