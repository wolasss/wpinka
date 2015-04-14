Template.appCragsList.events({
  "keyup .cragsListInput": _.debounce(function(e) {
		var text = $(e.target).val().trim();
				
		if(text.length > 0 && APP.CragsList.getCurrentQuery() !== text) {
			APP.CragsList.search(text);
		}
  }, 400)
});