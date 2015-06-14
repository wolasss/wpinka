Template.message.helpers({
	author: function(){
		if(isAuthorMe.call(this)){
			return "message__mine";
		}
	},
	msgTime: function(){
		return this.createdAt.toLocaleString();
	}
});

var isAuthorMe = function(){
	return this.from === Meteor.userId();
};