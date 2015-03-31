Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'underscore', 'reactive-var', 'tracker', 'geojson-utils', 'tap:i18n'], both);
    api.use(['iron:router', 'templating', 'meteoric:ionic', 'jquery', 'skinnygeek1010:cordova-status', 'session'], 'client');

    api.add_files('package-tap.i18n', both);
    
    api.add_files('client/views/position_alert.html', 'client');
    api.add_files('client/views/events/position_alert.js', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    api.add_files('client/model/startup.js', 'client');

    api.add_files([
        'locales/en.i18n.json',
        'locales/pl.i18n.json'
    ], both);
});

Cordova.depends({
  "org.apache.cordova.geolocation": "0.3.10",
  "cordova.plugins.diagnostic": "https://github.com/mablack/cordova-diagnostic-plugin/tarball/5a54be1213644289af19fb9e227b7f225cb15a47"
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});