Template.appTheWallPost.helpers({
	name: function() {
		return APP.Login.displayName();
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
	}
});

Template.appTheWallPost.rendered = function() {
	APP.TheWall.seenAck();
};