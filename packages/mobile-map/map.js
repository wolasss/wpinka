Template.nativeMap.onRendered(function(){
    var self = this;

    document.addEventListener("deviceready", function() {
        var data = self.data;

        if(Meteor.isCordova){
            MapControl.setup($(".map_canvas")[0], data.center, parseInt(data.zoom,10));
        }
    });
});

Template.nativeMap.destroyed = function(){
    MapControl.destroy();
};