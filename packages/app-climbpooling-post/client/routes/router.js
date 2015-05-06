Router.map(function(){
  this.route('appClimbpoolingAdd', function(){
    this.render();
  }, {
    path: '/climbpooling/add',
    layoutTemplate: 'layout',
    template: 'appClimbpoolingAdd',
    rightMenu: null,
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
      Alerts.clear("appclimbpoolingadd");
      APP.Position.fetchCurrent();
    })
  });
});
