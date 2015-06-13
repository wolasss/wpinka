Router.map(function(){
    this.route('appMarket', function(){
        this.render();
    }, {
    path: '/market',
    layoutTemplate: 'layout',
    template: 'appMarket',
    rightMenu: 'appMarketRightMenu',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        APP.Market_local.seenPosts && APP.Market_local.seenPosts.set(0);
    })
    });
});
