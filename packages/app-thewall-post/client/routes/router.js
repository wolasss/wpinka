Router.map(function(){
  this.route('appTheWallAdd', function(){
    this.render();
  }, {
    path: '/thewall/add',
    layoutTemplate: 'layout',
    template: 'appTheWallAdd',
    rightMenu: 'appTheWallRightMenu',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
      APP.Position.fetchCurrent();
    })
  });
});
