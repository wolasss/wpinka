Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'tap:i18n'], both);
    api.use(['templating', 'iron:router', 'router-helpers', 'wolas:alerts', 'aldeed:simple-schema', 'meteoric:autoform-ionic', 'aldeed:autoform@4.2.0'], 'client');
    
    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);


    api.add_files('client/views/add.html', 'client');
    api.add_files('client/views/add.js', 'client');
    api.add_files('client/views/events/add.js', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});

Cordova.depends({
    'com.plugin.datepicker': '0.4.0'
});