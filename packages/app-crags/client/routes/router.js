Router.map(function(){
    this.route('appCragsScreen', function(){
        this.render();
    }, {
        path: '/crags',
        layoutTemplate: 'layout',
        template: 'appCragsScreen',
        rightMenu: 'appTheWallRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
            APP.TheWall.seenPosts && APP.TheWall.seenPosts.set(0);
        })
    });
});

Router.map(function(){
    this.route('appCragsList', function(){
        this.render();
    }, {
        path: '/cragsList',
        layoutTemplate: 'layout',
        template: 'appCragsList',
        rightMenu: 'appTheWallRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
            APP.TheWall.seenPosts && APP.TheWall.seenPosts.set(0);
        })
    });
});

