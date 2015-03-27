Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'templating', 'app-register', 'underscore', 'app-validators'], both);
    api.use(['wolas:alerts', 'iron:router'], 'client');


    api.add_files('client/views/login_page.html', 'client');
    api.add_files('client/views/login_screen.html', 'client');

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');
    api.add_files('client/views/events/login_screen.js', 'client');

});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});