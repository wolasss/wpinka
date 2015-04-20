function convertToSlug(Text)
{
    return Text && Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}

Template.appCragsList.rendered = function() {
	Tracker.autorun(function(){
		if(APP.Position.current.get()) {
			APP.CragsList.search("", {currentPosition: APP.Position.current.get()});
		}
	});
};

Template.appCragsList.helpers({
	foundCrags: function() {
		return APP.CragsList.getData({
			transform: function(matchText, regExp) {

				if(typeof matchText === "string") {
					return matchText.replace(regExp, "<span class=\"highlight\">$&</span>");
				} else {
					return matchText;
				}
				
			},
			sort: {isoScore: -1}
		});
	},
	distance: function() {
		if(APP.Position.getCurrent() && this.geometry && this.geometry.geoJSONPoint) {
			var meters = GeoJSON.pointDistance(APP.Position.getCurrent(), this.geometry.geoJSONPoint);
			var ret;

			if(meters > 1000) {
				ret = ""+Math.ceil(meters/1000)+"km away";
			} else {
				ret = ""+Math.ceil(meters)+"m away";
			}
			
			return ret;
		}
	},
	nameSlug: function() {
		return convertToSlug(this.asciiName);
	},
	isLoading: function() {
    	return APP.CragsList.getStatus().loading;
	}
});