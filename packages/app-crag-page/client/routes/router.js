Router.map(function(){
    var self = this;

    this.route('appCragPage', function(){

        this.render();
    }, {
        data: function() {
            var data = APP.CragsCollection.findOne({id: this.params.id});
            
            if(data && data.childIDs) {
                var list = data.childIDs;
                list.push(data.id);

                Meteor.subscribe("crag", list);
            }

            return data;
        },
        path: '/crag/:id',
        layoutTemplate: 'layout',
        template: 'appCragPage',
        rightMenu: 'appTheWallRightMenu',
        waitOn: function() {
            var data = this.data();

            if(data && data.geometry && data.geometry.geoJSONPoint) {
                APP.CragStream = new APP.FixedStream({
                    name: "crag",
                    collection: "posts",
                    position: data.geometry.geoJSONPoint
                });
                APP.CragStream.subscribe()
            } 
            
            return Meteor.subscribe("crag", this.params.id);
        },
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        })
    });
});

Router.map(function(){
    var self = this;

    this.route('appCragPageMap', function(){

        this.render();
    }, {
        data: function() {
            return APP.CragsCollection.findOne({id: this.params.id});
        },
        path: '/crag/:id/map',
        layoutTemplate: 'layout',
        template: 'appCragPageMap',
        rightMenu: 'appTheWallRightMenu',
        waitOn: function() {
            return Meteor.subscribe("crag", this.params.id);
        },
        onBeforeAction: APP.RouterHelpers.loginCheck(function(){return this.next}, function(){
        })
    });
});