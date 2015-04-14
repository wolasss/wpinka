Template.appCragsList.events({
	"change .cragsListInput": function(e) {
		var text = $(e.target).val().trim();
		APP.CragsList.search(text);
	},
  "keyup .cragsListInput": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    console.log("searching for: ", text);
    
    APP.CragsList.search(text);

  }, 200)
});