var options = {
	keepHistory: 1000 * 60 * 5,
	localSearch: true
};

var fields = ['asciiName', 'geometry'];

APP.CragsList = new SearchSource('crags', fields, options);

Tracker.autorun(function(){
	if(APP.Position.current.get()) {
		APP.CragsList.search("", {currentPosition: APP.Position.current.get()});
	}
});