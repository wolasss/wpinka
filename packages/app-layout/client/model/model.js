UI.registerHelper("isActiveRoute", function(path){
	return (path === Router.current().route.path()) ? 'active' : '';
});