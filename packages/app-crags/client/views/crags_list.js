function convertToSlug(Text)
{
    return Text && Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}



Template.appCragsList.created = function () {
	this.subscribe("countryList");
};

Template.appCragsList.rendered = function() {
	this.autorun(function () {
		if (!this.subscriptionsReady()) {
			IonLoading.show();
		} else {
			if(APP.Position.current.get()) {
				//this is causing exception when hiding loading, but it hides properly - to further investigation
				APP.CragsList.search("", {currentPosition: APP.Position.current.get()});
			}
			IonLoading.hide();
		}
	}.bind(this));
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
	}
});

Tracker.autorun(function(){
	var status = APP.CragsList.status.get();
	if(this.IonLoading) {
		if(status.loading) {
			IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}
});