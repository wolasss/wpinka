Router.map(function(){
  this.route('appPostAdd', function(){
    this.render();
  }, {
    path: '/add',
    layoutTemplate: 'layout',
    template: 'appPostAdd',
    rightMenu: 'appTheWallRightMenu',
    onBeforeAction: function() {
      if(!Meteor.user() && !Meteor.loggingIn()) {
        Router.go('/');
      }
      this.next();
    }
  });
});
