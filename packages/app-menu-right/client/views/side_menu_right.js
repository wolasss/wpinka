Template.appSideMenuRight.helpers({
	getRightMenuName: function() {
		
		if(Router.current().route.options.rightMenu) {
			return Router.current().route.options.rightMenu;
		}

		return "defaultRightMenu";
	}
});