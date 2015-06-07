Router.map(function(){
  this.route('appMessages', function(){
    this.render();
  }, {
    path: '/messages',
    layoutTemplate: 'layout',
    template: 'appMessages',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});
