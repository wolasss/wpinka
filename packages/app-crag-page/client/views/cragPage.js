Template.appCragPage.created = function() {
	var route = Router.current();

	this.subscribe("crag", route.params.id);

	this.autorun(function(){
		var data = route.data();

		if(data && data.childIDs) {
            var list = data.childIDs;
            list.push(data.id);

            this.subscribe("crag", list);
        }

		if(data && data.geometry && data.geometry.geoJSONPoint) {
	        APP.CragStream = new APP.FixedStream({
	            name: "crag",
	            collection: "posts",
	            position: data.geometry.geoJSONPoint
	        });
	        APP.CragStream.subscribe();
    	}
	}.bind(this));
};

Template.appCragPage.rendered = function() {
	this.autorun(function () {
		if (!this.subscriptionsReady()) {
			if(!IonLoading.view) IonLoading.show();
		} else {
			IonLoading.hide();
		}
	}.bind(this));
};

Template.appCragPage.helpers({
	height: function(){
		if(this.averageHeight) {
			return this.averageHeight.join(" ");
		} else if(this.displayAverageHeight) {
			return this.displayAverageHeight.join(" ");
		}
	},
	subcrags: function() {
		var childs = this.childIDs;

		if(childs && childs.length > 0) {
			return APP.CragsCollection.find({id: {$in: childs}});
		}
		return [];
	}
});