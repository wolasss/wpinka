Package.describe({
  summary: "Main app package"
});

Package.on_use(function (api) {
	api.add_files(["app.js"], ['client','server']);
	
	api.export("APP");
});