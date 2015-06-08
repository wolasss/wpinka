Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'tap:i18n', 'meteoric:autoform-ionic', 'search-source', 'templating', 'aldeed:autoform', 'underscore'], both);

    api.add_files('package-tap.i18n', both);

    api.add_files('client/views/node.html', 'client');
    api.add_files('client/views/node.js', 'client');
    api.add_files('client/views/node.css', 'client');
    api.add_files('client/views/events/node.js', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});