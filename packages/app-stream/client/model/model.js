UI.registerHelper("streamUnreadPosts", function(stream){
	if(APP[stream].getPosts())
		return APP[stream].getPosts().fetch().length - APP[stream].seenPosts.get();
});

