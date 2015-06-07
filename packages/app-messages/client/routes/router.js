Router.map(function(){
  this.route('appMessenger', function(){
    this.render();
  }, {
    path: '/messages',
    layoutTemplate: 'layout',
    template: 'appMessenger',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});
