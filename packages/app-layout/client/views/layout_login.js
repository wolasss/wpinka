Template.layoutLogin.helpers({
	isNotHome: function() {
		return Router.current().route.path()!=="/";
	}
});