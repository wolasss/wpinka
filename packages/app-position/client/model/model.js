APP.Position = {};

APP.Position.current = new ReactiveVar(null);
APP.Position.epsilon = 100; // initially it is 100m
APP.Position.noPositionTpl = "noposition";

_.extend(APP.Position, {
	error: function(err) {
		if(!APP.Position.current.get()) {
			//there's no user position yet

			if(err.code === err.TIMEOUT) {
				setTimeout(this.fetchCurrent, 1000); //try again after 1s
			} else {
				//show user info about position problem

				if(!$('body').hasClass('modal-open') && ( Meteor.user() || Meteor.loggingIn())) {
					setTimeout(function(){
						//no DOM ready workoround as a first time
						IonModal.open("noposition");
					}, 500);
				}
			}
		}
	},
	fetchCurrent : function() {
		var pos = navigator.geolocation.getCurrentPosition(function(pos){
			if($('body').hasClass('modal-open')) {
				IonModal.close();
			}

			if(pos.coords) {
				var gjPoint = {
					type: "Point",
					coordinates: [pos.coords.latitude, pos.coords.longitude]
				};

				//now check if it is a valid change -> gt epsilon
				if(APP.Position.current.get()) {
					if(GeoJSON.pointDistance(APP.Position.current.get(), gjPoint)>APP.Position.epsilon) {
						APP.Position.current.set(gjPoint);
					}
				} else {
					//set anyway its initial new position
					APP.Position.current.set(gjPoint);
				}

			}
		}, this.error, {
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