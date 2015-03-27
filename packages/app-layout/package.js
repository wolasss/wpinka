Package.describe({
    summary: "Layout"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'tap:i18n'], both);
    api.use(['iron:router', 'templating', 'app-menu-left', 'app-menu-right'], 'client');

    api.add_files('package-tap.i18n', both);

    api.add_files('client/views/layout.html', 'client');
    api.add_files('client/views/layout_login.html', 'client');

    api.add_files('client/views/home.html', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    api.add_files('client/views/events/layout.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});