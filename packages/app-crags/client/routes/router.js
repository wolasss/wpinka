Router.map(function(){
    this.route('appCragsScreen', function(){
        this.render();
    }, {
        path: '/crags',
        layoutTemplate: 'layout',
        template: 'appCragsScreen',
        rightMenu: 'appTheWallRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        
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
        rightMenu: 'appCragListRightMenu',
        waitOn: function() {
            return Meteor.subscribe("countryList");
        },
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        
        })
    });
});


Router.map(function(){
    this.route('appCragsMap', function(){
        this.render();
    }, {
        path: '/cragsMap',
        layoutTemplate: 'layout',
        template: 'appCragsMap',
        rightMenu: 'appCragListRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        
        })
    });
});

