APP.Position = {};

APP.Position.current = new ReactiveVar(null);
APP.Position.epsilon = 100; // initially it is 100m

_.extend(APP.Position, {
	fetchCurrent : function() {
		var pos = navigator.geolocation.getCurrentPosition(function(pos){
			if(pos.coords) {
				var gjPoint = {
					type: "Point",
					coordinates: [pos.coords.latitude, pos.coords.longitude]
				};

				//now check if it is a valid change -> gt epsilon
				if(App.position.current.get()) {
					if(GeoJSON.pointDistance(App.position.current.get(), gjPoint)>APP.Position.epsilon) {
						APP.Position.current.set(gjPoint);
					}
				} else {
					//set anyway its initial new position
					APP.Position.current.set(gjPoint);
				}
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