Router.map(function(){
  this.route('appTheWallAdd', function(){
    this.render();
  }, {
    path: '/thewall/add',
    layoutTemplate: 'layout',
    template: 'appTheWallAdd',
    rightMenu: 'appTheWallRightMenu',
    onBeforeAction: function() {
      if(!Meteor.user() && !Meteor.loggingIn()) {
        Router.go('/');
      }
      this.next();
    }
  });
});
