Template.registerHelper("currentLocation", function(){
	return APP.Position.current.get();
});