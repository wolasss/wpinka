Package.describe({
    summary: "In-app messaging system"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['iron:router', 'templating', 'router-helpers'], 'client');
    api.use(['app', 'tap:i18n', 'underscore', 'mongo'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    
    api.add_files('client/views/messenger.html', 'client');
    api.add_files('client/views/messenger.js', 'client');
    api.add_files('client/views/thread_preview.html', 'client');
    api.add_files('client/views/thread_preview.js', 'client');
    api.add_files('client/views/thread.html', 'client');
    api.add_files('client/views/thread.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});