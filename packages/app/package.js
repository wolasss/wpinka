Package.describe({
  summary: "Main app package"
});

Package.on_use(function (api) {
	var both = ['client', 'server'];
	api.add_files(["app.js"], both);
	api.use(['meteoric:ionic', 'meteoric:ionicons-sass', 'meteoric:ionic-sass', 'iron:router', 'tap:i18n'], 'client');

	api.export("APP");
});