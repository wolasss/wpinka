if(Meteor.isCordova) {
	Tracker.autorun(function(){
		var status = Session.get("cordovaStatus");

		if(status === "resumed") {
			console.log("app resumed, fetching new position");
			APP.Position.checkPositionSettings(function(){
				APP.Position.fetchCurrent();
			});
		}
	});
}
