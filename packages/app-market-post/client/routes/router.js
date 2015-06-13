Router.map(function(){
  this.route('appMarketAdd', function(){
    this.render();
  }, {
    path: '/market/add',
    layoutTemplate: 'layout',
    template: 'appMarketAdd',
    rightMenu: null,
    onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
      Alerts.clear("appmarketadd");
      APP.Position.fetchCurrent();
    })
  });
});
