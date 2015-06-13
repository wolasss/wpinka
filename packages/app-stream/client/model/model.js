UI.registerHelper("streamUnreadPosts", function(stream){
	if(stream && APP[stream] && APP[stream].getPosts())
		return APP[stream].getPosts().fetch().length - APP[stream].seenPosts.get();
});

UI.registerHelper("getModifiedContent", function() {
	var div = document.createElement("div");
	div.innerHTML = this.content;
	
	var strippedContent = $(div).text();

	return strippedContent.replace(/(https?:\/\/.*\.(?:png|jpg))/i, function(img){
		return "<p class=\"post-image-container \"><img src=\""+img+"\" class=\"accelerate image\"></img></p>";
	});
});