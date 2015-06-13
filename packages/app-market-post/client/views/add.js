Template.appMarketAdd.helpers({
	marketFormSchema: function(){
		return new SimpleSchema({
			title: {
				type: String,
				max: 35,
				autoform: {
					placeholder: TAPi18n.__("item"),
					label: false,
					class: "placeholder-padding"
				}
			},
			content: {
				type: String,
				max: 500,
				autoform: {
					label: false,
					rows: 10,
					class: "post__content post__form",
					placeholder: TAPi18n.__("desc")
				}
			},
			category: {
				type: String,
				autoform: {
					type: "select2",
					options: APP.Market.getCategoryOptiones()
				}
			},
			price: {
				type: Number,
				label: TAPi18n.__("price")
			},
			local: {
				type: Boolean,
				label: TAPi18n.__("local"),
				autoform: {
					type: "toggle"
				}
			}
		});
	}
});

AutoForm.hooks({
  'marketAddForm': {
    onSubmit: function (data, result, template) {

		APP.Market_local.insert(data, function(error){
			if(error) {
				console.log(error);
				Alerts.error(TAPi18n.__("theWallPostErrors.internalError"), 'appmarketadd');
			} else {
				Router.go('/market');
			}
		});

		this.done();

		return false;
    },

    onError: function(operation, error, template) {    	
		Alerts.error(error, 'appmarketadd'); //TODO translation of the errors
		return false;
    }
  }
});