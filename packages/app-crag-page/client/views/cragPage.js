Template.appCragPage.helpers({
	height: function(){
		return this.averageHeight.join(" ");
	},
	subcrags: function() {
		var childs = this.childIDs;

		if(childs && childs.length > 0) {
			return APP.CragsCollection.find({id: {$in: childs}});
		}
		return [];
	}
});