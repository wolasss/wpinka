Template.nativeMap.onRendered(function(){
    var self = this;

    document.addEventListener("deviceready", function() {
        var data = self.data;

		if(Meteor.isCordova){
			if(data.onCameraChange) {
				MapControl.setOnCameraChange(data.onCameraChange);
			} else {
				MapControl.setOnCameraChange(null);
			}

            MapControl.setup($(".map_canvas")[0], data.center, parseInt(data.zoom,10), data.markers);
        }
    });
});

Template.nativeMap.destroyed = function(){
    MapControl.destroy();
};