MapControl = {
    setup : function(mapContainer, center, zoom, markers){
        if(!plugin) return;
        var self = this;
        this.__markers = [];

        document.addEventListener("deviceready", function() {
            var control = self;
            var map = plugin.google.maps.Map.getMap(mapContainer);
            self.__map = map;

            map.on(plugin.google.maps.event.MAP_READY, function(){
                console.log("MAP READY");
                control.__isReady.set(true);
                
                if(center) {
                    setTimeout(function(){
                        self.centerMap(center.coordinates[0], center.coordinates[1]);
                    }, 500);
                }

                if(zoom) {
                    self.__map.setZoom(zoom);
                }

                if(markers) {
                    console.log("mamy markery", markers);

                    self.setMarkers(markers);
                }
            });

            map.on(plugin.google.maps.event.CAMERA_CHANGE, _.debounce(function() {
                if(self.__onCameraChange) {
                    self.__onCameraChange.call(self, null);
                }
            }, 1000));
        });
    },

    destroy : function(){
        this.__map.remove();
    },

    isReady : function(){
        return this.__isReady.get();
    },

    centerMap : function(latitude,longitude){
        console.log("centering map", latitude, longitude);

        this.__center = new plugin.google.maps.LatLng(latitude, longitude);
        this.__map.setCenter(this.__center);
    },

    setOnMarkerClick : function(handler){
        this.__onMarkerClick = handler;
    },

    setOnCameraChange : function(handler){
        this.__onCameraChange = handler;
    },

    setMarkers : function(markers){
        var newMarkersIds = _.map(markers, this.getMarkerId);
        var currentMarkerIds = _.map(this.__markers, this.getMarkerId);
        var removedMarkersIds = _.difference(currentMarkerIds, newMarkersIds);


        console.log('@@@ new markers', newMarkersIds);
        console.log('@@@ current markers', currentMarkerIds);
        console.log('@@@ removed markers', removedMarkersIds);


        // remove current markers that are not in the new set
        this.removeMarkers(removedMarkersIds);

        // add new ones (addMarkers auto checks for dupes)
        this.addMarkers(markers);

        console.log("after setting: ", this.__markers);
    },

    addMarkers : function(markers){
        if(!plugin) return;

        var that = this;

        console.log('@@@@@ adding markers', markers.length);

        _.each(markers, function(m){

            var existingMarker = _.find(that.__markers, function(ma){
                return ma._id === that.getMarkerId(m);
            });
            
            console.log(existingMarker);

            if(!existingMarker){
                that.__map.addMarker({
                    position: new plugin.google.maps.LatLng(m.latitude, m.longitude),
                    title: m.title,
                    snippet: m.snippet,
                    _id: m._id
                },function(marker) {
                    var m = marker;
                    that.__markers.push({
                        _id : marker.get('_id'),
                        marker : marker
                    });

                    console.log("marker rendered", marker);
                    
                    marker.addEventListener(plugin.google.maps.event.MARKER_CLICK, function(marker) {
                        if(that.__onMarkerClick){
                            that.__onMarkerClick.call(that, marker);
                        }
                    });

                    marker.addEventListener(plugin.google.maps.event.INFO_CLICK, function() {
                        Router.go('/crag/'+marker.get('_id'));
                    });
                });
            } else {
                console.log('@@@ marker already on the map, skipping');
            }
        });

        console.log("after adding: ", this.__markers);
    },

    removeMarkers : function(markers){
        var markersToRemove = _.filter(this.__markers, function(m){
            return markers.indexOf(m._id) !== -1;
        });

        _.each(markersToRemove, function(m){ m.marker.remove(); });

        console.log('removing', markers);

        this.__markers = _.filter(this.__markers, function(m){
            return markers.indexOf(m._id) === -1;
        });

        console.log("after removal: ", this.__markers);
    },

    getMarkers : function(){
        return this.__markers;
    },

    getMarkerId : function(marker){
        return marker._id || (marker.get && marker.get('_id')); 
    },

    __map : null,
    __isReady : new ReactiveVar(false),
    __markers : [],
    __onMarkerClick : function(marker){
        marker.showInfoWindow();
    },
    __onCameraChange : null,
    __center : null
};