APP.Position = {};

APP.Position.current = new ReactiveVar(null);

_.extend(APP.Position, {
	fetchCurrent : function() {
		var pos = navigator.geolocation.getCurrentPosition(function(pos){
			if(pos.coords) {
				var geoJSON = {
					type: "Point",
					coordinates: [pos.coords.latitude, pos.coords.longitude]
				};

				APP.Position.current.set(geoJSON);
			}
		}, function(err){
			console.log(err);
		}, {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		});
		return true;
	},
	getCurrent : function() {
		return this.current.get();
	}
});

APP.Position.fetchCurrent();

Tracker.autorun(function(){
	console.log("Position changed: ", APP.Position.current.get());
});