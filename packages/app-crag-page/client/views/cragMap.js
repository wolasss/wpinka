Template.appCragPageMap.helpers({
	cragLocation: function(){
		return this.geometry && this.geometry.geoJSONPoint;
	},
	cragMarkers: function() {
		var markers = [];
		
		if(this.id && this.geometry && this.geometry.lat && this.geometry.long && this.name) {
			markers.push({
				_id: this.id,
				latitude: this.geometry.lat,
				longitude: this.geometry.long,
				title: this.name,
				snippet: ""+this.geometry.lat+","+this.geometry.long
			});
		}
		return markers;
	}
});

