Router.map(function(){
    var self = this;

    this.route('appCragPage', function(){
        this.render();
    }, {
        data: function() {
            return APP.CragsCollection.findOne({id: this.params.id});
        },
        path: '/crag/:id',
        layoutTemplate: 'layout',
        template: 'appCragPage',
        rightMenu: 'appTheWallRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        })
    });
});

Router.map(function(){
    var self = this;

    this.route('appCragPageMap', function(){

        this.render();
    }, {
        data: function() {
            return APP.CragsCollection.findOne({id: this.params.id});
        },
        path: '/crag/:id/map',
        layoutTemplate: 'layout',
        template: 'appCragPageMap',
        rightMenu: 'appTheWallRightMenu',
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        })
    });
});