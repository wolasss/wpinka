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
    data: function(){
      return {
        name: this.params.query.name,
        author: this.params.query.author
      };
    },
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
    data: function(){
      return { id: this.params.id };
    },
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){ return this.next; })
  });
});
