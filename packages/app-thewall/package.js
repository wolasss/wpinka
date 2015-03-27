Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['iron:router', 'templating'], 'client');
    api.use(['app', 'app-stream'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    api.add_files('client/views/wall_feed.html', 'client');
    api.add_files('client/views/wall_feed.js', 'client');
    
    api.add_files('client/views/the_wall.html', 'client');

});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});