Template.threadPreview.helpers({
	authorIsMe: function(){
		return this.from === Meteor.userId();
	},
	authorName: function(){
		return Meteor.users.findOne(this.from).profile.name;
	}
});