Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'reactive-var', 'geojson-utils', 'mongo', 'underscore', 'tracker', 'app-position', 'dburles:mongo-collection-instances'], both);
    api.use(['templating'], 'client');
    
    api.export("APP");

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/views/post.html', 'client');
    api.add_files('client/views/post.js', 'client');

    api.add_files('client/views/stream.html', 'client');
    api.add_files('client/views/stream.js', 'client');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
});

Package.on_test(function (api) {
    api.use(['meteor-platform','tinytest', 'test-helpers', 'app-stream'], ['client', 'server']);

    api.add_files('server/tests/tests.js', 'server');
    api.add_files('client/tests/tests.js', 'client');
});