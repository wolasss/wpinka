Template.afNodeSearch.helpers({
	foundCrags: function() {
		return APP.CragsList.getData({
			sort: {isoScore: -1}
		});
	}
});