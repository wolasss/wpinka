APP.FixedStream = function(config) {
	APP.Stream.call(this, config);
	var self = this;

	this.subscribe = function() {
		if(Meteor.isClient) {
			var sub = Meteor.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
		}
	};

	this.subscribe();
}

APP.FixedStream.prototype = Object.create( APP.Stream.prototype );
APP.FixedStream.prototype.constructor = APP.FixedStream;
