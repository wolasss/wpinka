Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'fourseven:scss'], both);

    api.add_files('client/styles/main.scss', 'client');
    api.add_files('client/styles/login.scss', 'client');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});