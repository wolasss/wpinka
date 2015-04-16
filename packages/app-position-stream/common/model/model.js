APP.PositionStream = function(config) {
	APP.Stream.call(this, config);
	var self = this;

	this.subscribe = function(auto) {
		var sub;
		if(Meteor.isClient) {
			if(auto) {
				Tracker.autorun(function(){
					sub = Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
				});
			} else {
				sub = Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
			}
		}
		return sub;
	};

	this.publish();

	if(config.autosub) {
		this.subscribe();
	}
};

APP.PositionStream.prototype = Object.create( APP.Stream.prototype );
APP.PositionStream.prototype.constructor = APP.PositionStream;