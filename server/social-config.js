ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '352449231616703',
    secret: '7de0b3c3fe69de05b01ec33b84d8c9b9'
});

ServiceConfiguration.configurations.remove({
	service: "google"
});

ServiceConfiguration.configurations.insert({
	service: "google",
	clientId: "188156955317-ieudphoefmsoh98scifalknjvp8q95q0.apps.googleusercontent.com",
	secret: "V-yijOVcYPCVwItLU4keB-CE"
});