Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'underscore', 'reactive-var', 'tracker', 'geojson-utils', 'tap:i18n'], both);
    api.use(['iron:router', 'templating', 'meteoric:ionic', 'jquery'], 'client');
    
    api.add_files('client/views/noposition.html', 'client');
    api.add_files('client/views/events/noposition.js', 'client');

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

Cordova.depends({
  "org.apache.cordova.geolocation": "0.3.10"
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});