Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'tap:i18n', 'ejson', 'search-source', 'app-position', 'tracker', 'mongo', 'underscore', 'app-countries', 'mobile-map'], both);

    api.use(['templating', 'iron:router'], ['client']);

    api.add_files('package-tap.i18n', both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/views/list_menu.html', 'client');
    api.add_files('client/views/list_menu.js', 'client');
    api.add_files('client/views/events/list_menu.js', 'client');

    api.add_files('client/views/crags_list.html', 'client');
    api.add_files('client/views/crags_list.js', 'client');

    api.add_files('client/views/crags_map.html', 'client');
    api.add_files('client/views/crags_map.js', 'client');
    
    api.add_files('client/views/events/crags_list.js', 'client');

    api.add_files('client/views/crags_picker.html', 'client');
    api.add_files('client/views/crags_screen.html', 'client');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});