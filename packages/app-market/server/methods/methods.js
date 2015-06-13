Meteor.methods({
	"/market_local/add": function(post, position) {
		console.log(post, position);
		var _self = this;
		
		check(post, Object);
		check(post.content, String);
		check(post.local, Boolean);
		check(post.price, Number);
		check(post.category, String);
		check(post.title, String);

		check(position, {
			type: String,
			coordinates: Array
		});

		check(post.content, Match.Where(APP.Validators.isNotEmptyString));
		check(post.content, Match.Where(APP.Validators.isContentNotTooShort));
		check(post.content, Match.Where(APP.Validators.isContentNotTooLong));

		var retPost = {
			content: post.content,
			category: post.category,
			global: !!!post.local, //only local
			price: post.price,
			title: post.title,
			type: "market"
		};

		return APP.Stream.addPost.call(this, APP.Market_local.collection, retPost, position);
	}
});