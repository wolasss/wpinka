Package.describe({
    summary: "bootstrap alerts package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    
    api.use(['jquery'], 'client');
    api.add_files('alert.js', 'client');
});