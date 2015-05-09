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

    if(IonSideMenu.snapper) {
        IonSideMenu.snapper.on("open", function(){
            //menu was opened, hide te map
            if(MapControl.__map) {
                MapControl.__map.setVisible(false)
            }
        });

        IonSideMenu.snapper.on("close", function(){
            //menu was opened, hide te map
            if(MapControl.__map) {
                MapControl.__map.setVisible(true)
            }
        });
    }
});

Template.nativeMap.destroyed = function(){
    MapControl.destroy();
    IonSideMenu.snapper.off("open");
    IonSideMenu.snapper.off("close");
};