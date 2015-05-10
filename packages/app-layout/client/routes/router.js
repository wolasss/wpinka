Router.map(function(){
    this.route('home', function(){
        this.render();
    }, {
        path: '/',
        layoutTemplate: 'layout',
        template: 'appTheWall',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Meteor.userId()) {
                this.layout('layoutLogin');
                this.render();
                this.render('loginPage');
            } else {
                this.next();
            }
        }
    });
});
