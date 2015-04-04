Meteor.methods({
	"/thewall/add": function(position, content, stream) {
		check(content, String);
		check(stream, String);
		check(position, {
			type: String,
			coordinates: Array
		});
		var date = new Date();
		if(APP[stream]){
			APP[stream].collection.insert({ createdAt: date, modifiedAt: date, content: content, author: this.userId, location: position });
		} else {
			throw new Meteor.Error('streamUndefined');
		}
	}
})