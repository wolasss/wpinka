Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'templating', 'underscore', 'app-validators', 'accounts-facebook', 'accounts-password', 'tap:i18n'], both);
    api.use(['wolas:alerts', 'bootstrap-alerts', 'iron:router'], 'client');

    api.export && api.export("APP");

    api.add_files('package-tap.i18n', both);

    api.add_files('client/views/register_screen.html', 'client');
    api.add_files('client/views/login_services.html', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files('client/views/events/register_screen.js', 'client');
    api.add_files('client/views/events/login_services.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});