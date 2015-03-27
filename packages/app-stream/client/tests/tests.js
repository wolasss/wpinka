TestStream = new APP.Stream({
	name: "test"
});
TestStream.subscribe();

console.log(TestStream);

Tinytest.add(
    'stream - get posts from nearby',
    function (test) {
		test.equal(TestStream.collection.find().fetch().length, 0);

		//TestStream.changePosition({type: "Point", coordinates: [52.408562,16.9242881]});

		test.equal(TestStream.collection.find().fetch().length, 1);

        
    }
);