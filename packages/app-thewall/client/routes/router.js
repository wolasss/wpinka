Router.map(function(){
    this.route('appTheWall', function(){
        this.render();
    }, {
        path: '/thewall',
        layoutTemplate: 'layout',
        template: 'appTheWall',
        rightMenu: 'appTheWallRightMenu',
        waitOn: function(){
            return APP.TheWall.subscribe(true);
        },
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
            APP.TheWall.seenPosts && APP.TheWall.seenPosts.set(0);
        })
    });
});
