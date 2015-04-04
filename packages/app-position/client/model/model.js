APP.Position = {};

APP.Position.current = new ReactiveVar(null);
APP.Position.epsilon = 100; // initially it is 100m
APP.Position.noPositionTpl = "noposition";

var defaultTimeout = 20000;

_.extend(APP.Position, {
	error: function(err) {
		console.log(err.code, err.message);
		if(!APP.Position.current.get()) {
			//there's no user position yet

			if(err.code === err.TIMEOUT) {
				setTimeout(function(){
					APP.Position.fetchCurrent(true, defaultTimeout+10000);
				}, 1000); //try again after 1s
			} else {
				//show user info about position problem
				if(!$('body').hasClass('modal-open') && ( Meteor.user() || Meteor.loggingIn())) {
					setTimeout(function(){
						//no DOM ready workoround as a first time
						IonModal.open("positionAlert", {
							locationEnabled: 1,
							locationAuthorized: (err.code !== err.PERMISSION_DENIED)
						});
					}, 500);
				}
			}
		}
	},
	fetchCurrent : function(acc, timeout) {
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
			enableHighAccuracy: !!!acc,
			timeout: (timeout ? timeout : defaultTimeout),
			maximumAge: 0
		});
		return true;
	},
	getCurrent : function() {
		return this.current.get();
	},
	checkEnabledLocation: function(cb) {
		if(!cb) cb = function(){};
		if(!Meteor.isCordova) return;

		//first callback is success, and second is error, but in this plugin somehow you pass (return) param to succes callback only
		if(cordova.plugins.diagnostic) {
			cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
				cb.call(this, enabled);
			}, function(){});
		}
		
	},
	checkLocationAuthorization: function(cb) {
		if(!cb) cb = function(){};
		if(!Meteor.isCordova) return;

		//first callback is success, and second is error, but in this plugin somehow you pass (return) param to succes callback only
		if(cordova.plugins.diagnostic) {
			cordova.plugins.diagnostic.isLocationAuthorized(function(enabled){
				cb.call(this, enabled);
			}, function(){});
		}
		
	},
	openPositionModalAlert: function(config) {
		if(!$('body').hasClass('modal-open') && ( Meteor.user() || Meteor.loggingIn())) {
			if(config.enabledLocation == 0) {
				//then no point in showing message about no permissions.
				config.locationAuthorized = 1;
			}

			IonModal.open("positionAlert", config);
		}
	},
	checkPositionSettings: function(cb) {
		if(!cb) cb = function(){};
		if(!Meteor.isCordova) return;

		APP.Position.checkEnabledLocation(function(enabledLocation){
			APP.Position.checkLocationAuthorization(function(locationAuthorized){
				if(!(enabledLocation && enabledLocation)) {
					//one of them is off
					APP.Position.openPositionModalAlert({
						enabledLocation: enabledLocation,
						locationAuthorized: locationAuthorized
					});
				} else {
					if($('body').hasClass('modal-open')) {
						IonModal.close();
					}
					APP.Position.fetchCurrent();
				}
			});
		});
	}
});

APP.Position.fetchCurrent();

Tracker.autorun(function(){
	console.log("Position changed: ", APP.Position.current.get());
});