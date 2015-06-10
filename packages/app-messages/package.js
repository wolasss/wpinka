Package.describe({
    summary: "Messages handling package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['templating'], 'client');
    api.use(['app', 'tap:i18n', 'mongo'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files('client/views/messages.html', 'client');
    api.add_files('client/views/messages.js', 'client');
    api.add_files('client/views/message.html', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});