APP.FixedStream = function(config) {
	config.autoupdate = false;
	APP.Stream.call(this, config);

	var self = this;

	this.subscribe = function(auto) {
		var sub;
		if(Meteor.isClient) {
			console.log("subscribing to: ", config.position.coordinates);
			if(auto) {
				Tracker.autorun(function(){
					sub = Meteor.subscribe("stream_"+self.config.name, config.position, self.radius.get());
				});
			} else {
				sub = Meteor.subscribe("stream_"+self.config.name, config.position, self.radius.get());
			}
		}
		return sub;
	};

	this.publish();

	if(config.autosub) {
		this.subscribe();
	}
};

APP.FixedStream.prototype = Object.create( APP.Stream.prototype );
APP.FixedStream.prototype.constructor = APP.FixedStream;
