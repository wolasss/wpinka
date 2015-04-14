function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}

Template.appCragsList.helpers({
	foundCrags: function() {
		return APP.CragsList.getData();
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
	}
});