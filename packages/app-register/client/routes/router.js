Router.map(function(){
    this.route('registerScreen', function(){
        this.render();
    }, {
        path: '/register',
        layoutTemplate: 'layoutLogin',
        template: 'registerScreen'
    });
});
