Template.nativeMap.created = function(){
    if(Meteor.isCordova) {
        this.autorun(function(){
            var data = Template.currentData();

            if(!data.currentLocation) {
                console.log("Map has no current location");
                return;
            } else if(!data.currentLocation.type || !data.currentLocation.coordinates) {
                console.log("current position is not a geoJSON");
            }

            console.log('@@@ updates to map data');
            console.log('@@@ current location is', data.currentLocation);
            console.log('@@@ markers are', data.markers);
            
            if(data.currentLocation && MapControl.isReady()) {
                MapControl.centerMap(data.currentLocation.coordinates[0], data.currentLocation.coordinates[1]);
            }

            if(data.markers && data.markers.length > 0 && MapControl.isReady()){
                MapControl.setMarkers(data.markers);
            }
        })
    }
};

Template.nativeMap.rendered = function(){
    document.addEventListener("deviceready", function() {
        if(Meteor.isCordova){
            MapControl.setup($(".map_canvas")[0]);
        }
    });
};

Template.nativeMap.destroyed = function(){
    MapControl.destroy();
};