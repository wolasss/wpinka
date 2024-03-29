Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['iron:router', 'templating', 'tap:i18n', 'router-helpers', 'app-messenger'], 'client');
    api.use(['app', 'app-position-stream', 'underscore', 'reactive-var'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/views/post.html', 'client');
    api.add_files('client/views/post.js', 'client');

    api.add_files('client/views/climbpooling.html', 'client');
    api.add_files('client/views/climbpooling.js', 'client');
    api.add_files('client/views/events/climbpooling.js', 'client');

    api.add_files('client/views/subscriptions/climbpooling.js', 'client');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});