var sub, comp;

var _onCameraChange = function() {
	var self = this;

	this.__map.getVisibleRegion(function(latLngBounds) {
        if(self.__center) {
            var box = [[latLngBounds.southwest.lat, latLngBounds.southwest.lng],[latLngBounds.northeast.lat, latLngBounds.northeast.lng]];
            if(sub) sub.stop();
            if(comp && comp.stop) comp.stop();

            sub = Meteor.subscribe("mapCrags", box);
            
            IonLoading.show();

            comp = Tracker.autorun(function(c){
            	console.log("autorun: ", sub.ready(), c._id);
                if(sub.ready()) {
                    
                    IonLoading.hide();

                    var crags = APP.CragsCollection.find({}, {reactive: false}).fetch();
                    var markers = [];
                    

                    _.each(crags, function(crag){
                        if(crag.id && crag.name && crag.geometry && crag.geometry.lat && crag.geometry.long && !crag.isCountry) {
                            markers.push({
                                _id: crag.id,
                                latitude: crag.geometry.lat,
                                longitude: crag.geometry.long,
                                title: crag.name,
                                snippet: TAPi18n.__("openCrag")
                            });
                        }
                    });
                    
                    MapControl.setMarkers(markers);
                }
            });
        } else {
            self.centerMap(center.coordinates[0], center.coordinates[1]);
        }
    });
};

Template.appCragsMap.helpers({
	onCameraChange : function(){
		return _onCameraChange;
	}
});