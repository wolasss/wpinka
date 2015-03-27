TestStream = new APP.Stream({
	name: "test"
});
TestStream.publish();

TestStream.collection.remove({});

TestStream.collection.insert({
	name: "test",
	post: "post",
	location: {
		type: "Point",
		coordinates: [52.40676,16.9218045]
	}
});

TestStream.collection.insert({
	name: "test",
	post: "post",
	location: {
		type: "Point",
		coordinates: [12.40676,1.9218045]
	}
});

TestStream.collection.allow({insert: function() {
		return true;
	}
});