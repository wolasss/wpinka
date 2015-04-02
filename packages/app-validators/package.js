Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['app', 'check', 'underscore'], both);

    api.export("APP");

    api.add_files('common/model/model.js', both);
    api.add_files('client/model/model.js', 'client');
    api.add_files('server/model/model.js', 'server');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers', 'app-validators'], ['client', 'server']);

    api.add_files('common/tests/email_validation.js', ['client', 'server']);
    api.add_files('common/tests/empty_string_validation.js', ['client', 'server']);
    api.add_files('common/tests/content_length_validation.js', ['client', 'server']);
});