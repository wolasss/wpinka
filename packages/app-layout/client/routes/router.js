Router.map(function(){
    this.route('home', function(){
        this.render();
    }, {
        path: '/',
        layoutTemplate: 'layout',
        template: 'home',
        onBeforeAction: function() {
            this.next();
        }
    });
});
