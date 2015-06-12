Router.map(function(){
  this.route('appMessenger', function(){
    this.render();
  }, {
    path: '/messenger',
    layoutTemplate: 'layout',
    template: 'appMessenger',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});

Router.map(function(){
  this.route('appMessengerCreateThread', function(){
    this.render();
  }, {
    path: '/messenger/new',
    layoutTemplate: 'layout',
    template: 'newThread',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});

Router.map(function(){
  this.route('appMessengerThread', function(){
    this.render();
  }, {
    path: '/messenger/:id',
    layoutTemplate: 'layout',
    template: 'thread',
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});
