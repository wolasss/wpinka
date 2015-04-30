MapControl = {
    setup : function(mapContainer){
        if(!plugin) return;
        var self = this;

        document.addEventListener("deviceready", function() {
            var control = self;
            var map = plugin.google.maps.Map.getMap(mapContainer);
            self.__map = map;

            map.on(plugin.google.maps.event.MAP_READY, function(){
                console.log("MAP READY");
                control.__isReady.set(true);
            });

            map.on(plugin.google.maps.event.CAMERA_CHANGE, _.throttle(function() {
                
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
        console.log("centering map", latitude, longitude)
        if(!plugin) return;

        if(this.__center){
            if((this.__center.lat === latitude) && (this.__center.lng === longitude)){
                return;
            }
        }

        this.__center = new plugin.google.maps.LatLng(latitude, longitude);
        this.__map.setCenter(this.__center);
    },

    setOnMarkerClick : function(handler){
        this.__onMarkerClick = handler;
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
    },

    addMarkers : function(markers){
        if(!plugin) return;

        var that = this;

        console.log('@@@@@ adding markers', markers.length);

        _.each(markers, function(m){

            var existingMarker = _.find(that.__markers, function(m){
                return m._id === that.getMarkerId(m);
            });

            if(!existingMarker){
                that.__map.addMarker({
                    position: new plugin.google.maps.LatLng(m.latitude, m.longitude),
                    _id: m._id
                },function(marker) {
                    
                    that.__markers.push({
                        _id : marker.get('_id'),
                        marker : marker
                    });

                    marker.setOpacity(0.5);
                    
                    marker.addEventListener(plugin.google.maps.event.MARKER_CLICK, function(marker) {
                        if(that.__onMarkerClick){
                            that.__onMarkerClick.call(that, marker);
                        }
                    });
                });
            } else {
                console.log('@@@ marker already on the map, skipping');
            }
        });
    },

    removeMarkers : function(markers){
        var ids = _.map(markers, this.getMarkerId);
        var markersToRemove = _.filter(this.__markers, function(m){
            return ids.indexOf(m._id) !== -1;
        });

        _.each(markersToRemove, function(m){ m.marker.remove(); });

        console.log('removing', ids);

        this.__markers = _.filter(this.__markers, function(m){
            return ids.indexOf(m._id) === -1;
        });
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
    __onMarkerClick : null,
    __center : null
};