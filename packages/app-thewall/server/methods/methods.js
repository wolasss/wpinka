Meteor.methods({
	"/thewall/add": function(post, position) {
		check(post, Object);
		check(post.content, String);
		check(position, {
			type: String,
			coordinates: Array
		});

		check(post.content, Match.Where(APP.Validators.isNotEmptyString));
		check(post.content, Match.Where(APP.Validators.isContentNotTooShort));
		check(post.content, Match.Where(APP.Validators.isContentNotTooLong));

		var retPost = {
			content: post.content
		};

		return APP.Stream.addPost(APP.TheWall.collection, retPost, position);
	}
})