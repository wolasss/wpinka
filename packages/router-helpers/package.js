Package.describe({
    summary: "Router helpers"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'iron:router'], both);

    api.add_files('client/model/model.js', 'client');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});