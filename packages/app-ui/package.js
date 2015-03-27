Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app'], both);
    api.use(['fourseven:scss'], 'client');

    api.add_files('client/styles/_variables.scss', 'client');
    api.add_files('client/styles/main.scss', 'client');
    api.add_files('client/styles/login.scss', 'client');
    api.add_files('client/styles/alerts.scss', 'client');
    api.add_files('client/styles/bar.scss', 'client');
    api.add_files('client/styles/menu.scss', 'client');
    api.add_files('client/styles/list.scss', 'client');
    api.add_files('client/styles/buttons.scss', 'client');

});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});