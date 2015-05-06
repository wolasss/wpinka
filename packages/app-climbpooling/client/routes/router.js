Router.map(function(){
    this.route('appClimbpooling', function(){
        this.render();
    }, {
    path: '/climbpooling',
    layoutTemplate: 'layout',
    template: 'appClimbpooling',
    rightMenu: 'appClimbpoolingRightMenu',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        APP.TheWall.seenPosts && APP.TheWall.seenPosts.set(0);
    })
    });
});
