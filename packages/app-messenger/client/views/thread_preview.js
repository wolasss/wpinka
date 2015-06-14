Template.threadPreview.helpers({
	author: function(){
		if(isAuthorMe.call(this.lastMessage)){
			return "You:";
		} else if (this.participants.length > 2 || this.name){
			return authorName.call(this.lastMessage);
		}
	},
	participants: function(){
		if(this.name){
			return this.name;
		}
		var participantsIds = participantsWithoutMe.call(this);
		return Meteor.users.find({ _id: { $in: participantsIds } }).map(function(u){
			return u.profile.name;
		}).join(", ");
	},
	lastMsgTime: function(){
		return this.lastMessage.createdAt.toDateString();
	}
});

var isAuthorMe = function(){
	return this.from === Meteor.userId();
};

var authorName = function(){
	var user = Meteor.users.findOne(this.from);
	return user && user.profile.name + ":";
};

var participantsWithoutMe = function(){
	return _.reject(this.participants, function(p){ return p === Meteor.userId(); });
}
