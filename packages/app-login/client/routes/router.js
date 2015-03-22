Router.map(function(){
    this.route('loginScreen', function(){
        this.render();
    }, {
        path: '/login',
        layoutTemplate: 'layoutLogin',
        template: 'loginScreen'
    });
});
