APP.PositionStream = function(config) {
	APP.Stream.call(this, config);
	var self = this;

	this.subscribe = function() {
		if(Meteor.isClient) {
			Tracker.autorun(function(){
				var sub = Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
			});
		}
	};

	this.subscribe();
}

APP.PositionStream.prototype = Object.create( APP.Stream.prototype );
APP.PositionStream.prototype.constructor = APP.PositionStream;
