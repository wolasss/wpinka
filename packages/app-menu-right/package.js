Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'templating'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    api.add_files('client/views/side_menu_right.html', 'client');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});