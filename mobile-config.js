App.info({
	id: "com.cragnet"
});

App.accessRule("*.google.com", {launchExternal: true});
App.accessRule("*.googleapis.com", {launchExternal: true});
App.accessRule("*.gstatic.com", {launchExternal: true});

App.configurePlugin('plugin.google.maps', {
	'API_KEY_FOR_IOS': 'AIzaSyBtQLoIBiHZDKPfLg5GtKRH4laCIcpnZiQ',
	'API_KEY_FOR_ANDROID': 'your-api-key'
});