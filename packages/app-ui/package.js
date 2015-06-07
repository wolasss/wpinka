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
    api.add_files('client/styles/_ionic_overrides.scss', 'client');
    api.add_files('client/styles/posts.scss', 'client');
    api.add_files('client/styles/slider.scss', 'client');
    api.add_files('client/styles/textarea.scss', 'client');
    api.add_files('client/styles/map.scss', 'client');
    api.add_files('client/styles/messages.scss', 'client');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});