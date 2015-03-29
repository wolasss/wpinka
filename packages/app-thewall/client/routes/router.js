Router.map(function(){
    this.route('appTheWall', function(){
        this.render();
    }, {
        path: '/thewall',
        layoutTemplate: 'layout',
        template: 'appTheWall',
        onBeforeAction: function() {
            if(!Meteor.user() && !Meteor.loggingIn()) {
                Router.go('/');
            }

        	APP.TheWall.seenPosts && APP.TheWall.seenPosts.set(0);
        	this.next();
        }
    });
});
