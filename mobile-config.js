App.info({
	id: "com.cragnet"
});

App.accessRule("10.0.0.*", {launchExternal: true});
App.accessRule("*.google.com", {launchExternal: true});
App.accessRule("*.googleapis.com", {launchExternal: true});
App.accessRule("*.gstatic.com", {launchExternal: true});
App.accessRule("*.kadira.io", {launchExternal: true});

App.accessRule("*:/*/*.(jpg|png)", {launchExternal: false});

App.configurePlugin('plugin.google.maps', {
	'API_KEY_FOR_IOS': 'AIzaSyBtQLoIBiHZDKPfLg5GtKRH4laCIcpnZiQ',
	'API_KEY_FOR_ANDROID': 'AIzaSyDbe4IXuNRICOIUeQ98dDObXWvlwS7bR68'
});