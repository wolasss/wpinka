Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    
    api.use('chart:chart', 'client');

    api.use(['app', 'tap:i18n', 'templating', 'app-crags', 'iron:router', 'app-stream', 'mobile-map'], both);

    api.add_files('package-tap.i18n', both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files('client/views/cragPage.html', 'client');
    api.add_files('client/views/cragPage.js', 'client');

    api.add_files('client/views/cragMap.html', 'client');
    api.add_files('client/views/cragMap.js', 'client');

    api.add_files('client/views/seasonality_chart.html', 'client');
    api.add_files('client/views/seasonality_chart.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});