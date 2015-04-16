Template.post.helpers({
	name: function() {
		var author = Meteor.users.findOne({_id: this.author});

		return APP.Login.formatName(author);
	},
	fromNow: function() {
		return moment(this.createdAt).fromNow();
	},
	distance: function() {
		if(APP.Position.getCurrent() && this.location) {
			var meters = GeoJSON.pointDistance(APP.Position.getCurrent(), this.location);
			var ret;

			if(meters > 1000) {
				ret = ""+Math.ceil(meters/1000)+"km away";
			} else {
				ret = ""+Math.ceil(meters)+"m away";
			}
			
			return ret;
		}
	},
	postTemplateName: function() {
		return (this.type ? "post_"+this.type : "post_status");
	}
});