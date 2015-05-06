APP.PositionStream = function(config) {
	APP.Stream.call(this, config);
	var self = this;

	this.subscribe = function(auto, _this) {
		//this is supposed to be template or Meteor
		if(!_this) _this = Meteor;

		if(Meteor.isClient) {
			if(auto) {
				Tracker.autorun(function(){
					sub = _this.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
				});
			} else {
				sub = _this.subscribe("stream_"+self.config.name, self.position.get(), self.radius.get());
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