Router.map(function(){
    this.route('appTheWall', function(){
        this.render();
    }, {
        path: '/thewall',
        layoutTemplate: 'layout',
        template: 'appTheWall'
    });
});
