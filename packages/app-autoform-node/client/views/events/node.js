Template.afNodeSearch.events({
  "keyup [data-type=nodeCragInput]": _.debounce(function(e) {
		var text = $(e.target).val().trim();
				console.log(text);

		if(text.length > 0 && APP.CragsList.getCurrentQuery() !== text) {
      console.log("searching...", text);
			APP.CragsList.search(text, {depthModificator: "2.5"});
		}
  }, 400),
  "focusin [data-type=nodeCragInput]" : function(e, t) {
    var node = t.find(".input-nodesearch");
    $(node).addClass("focused");
  },
  "focusout [data-type=nodeCragInput]": function(e, t) {
    var node = t.find(".input-nodesearch");

		setTimeout(function(){
			// APP.CragsList.store.remove({});
      $(node).removeClass("focused");
		}, 500);
  },
  "click .results .item": function(e, t) {
    var input = t.find("[data-type=nodeCragInput]");

    if(this.crag && this.crag.geometry && this.crag.geometry.geoJSONPoint) {
    	input.setAttribute("coords", this.crag.geometry.geoJSONPoint.coordinates.toString())
    }

    input.value = this.crag.asciiName;
    APP.CragsList.store.remove({});

  }
});