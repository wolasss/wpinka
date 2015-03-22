Package.describe({
  summary: "Main app package"
});

Package.on_use(function (api) {
	api.add_files(["app.js"], ['client','server']);
	api.use(['meteoric:ionic', 'meteoric:ionicons-sass', 'meteoric:ionic-sass','iron:router'], ['client', 'server']);

	api.export("APP");
});