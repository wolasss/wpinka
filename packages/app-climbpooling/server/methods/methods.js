Meteor.methods({
	"/climbpooling/add": function(post, position) {
		console.log(post, position);
		
		check(post, Object);
		check(post.content, String);
		check(post.partner, Boolean);
		check(post.gear, Boolean);
		check(post.when, Date);

		check(position, {
			type: String,
			coordinates: Array
		});

		check(post.content, Match.Where(APP.Validators.isNotEmptyString));
		check(post.content, Match.Where(APP.Validators.isContentNotTooShort));
		check(post.content, Match.Where(APP.Validators.isContentNotTooLong));

		var retPost = {
			content: post.content,
			when: post.when,
			ride: post.ride,
			gear: post.gear,
			partner: post.partner,
			type: "climbpooling"
		};

		return APP.Stream.addPost.call(this, APP.Climbpooling.collection, retPost, position);
	}
});