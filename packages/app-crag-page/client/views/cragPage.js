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