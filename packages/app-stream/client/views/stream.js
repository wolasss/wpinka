Template.stream.helpers({
	posts: function() {
		if(this.feed && APP[this.feed]) {
			return APP[this.feed].getPosts();
		}
	}
});