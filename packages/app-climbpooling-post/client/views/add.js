Template.appClimbpoolingAdd.helpers({
	climbPoolingFormSchema: function(){
		return new SimpleSchema({
			content: {
				type: String,
				max: 500,
				autoform: {
					label: false,
					rows: 10,
					class: "post__content post__form",
					placeholder: TAPi18n.__("lookingFor")
				}
			},
			from: {
				type: String,
				label: TAPi18n.__("from"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			to: {
				type: String,
				label: TAPi18n.__("to"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			when: {
				type: Date,
				label: TAPi18n.__("date")
			},
			ride: {
				type: String,
				label: TAPi18n.__("ride"),
				autoform: {
					type: "select-radio",
					template: "ionic",
					options: {
						look: TAPi18n.__("rides.look"),
						offer: TAPi18n.__("rides.offer"),
						notrelevant: TAPi18n.__("rides.notrelevant")
					}
				}
			},
			partner: {
				type: Boolean,
				label: TAPi18n.__("partner"),
				autoform: {
					type: "toggle"
				}
			},
			gear: {
				type: Boolean,
				label: TAPi18n.__("gear"),
				autoform: {
					type: "toggle"
				}
			}
		});
	}
});

AutoForm.hooks({
  'climbpoolingAddForm': {
    onSubmit: function (operation, result, template) {
    	console.log("submit", operation, result, template);

		APP.Climbpooling.insert(operation, function(error){
			if(error) {
				Alerts.error(TAPi18n.__("theWallPostErrors.internalError"), 'appclimpoolingadd');
			} else {
				Router.go('/climbpooling');
			}
		});

      this.done();

      return false;
    },

    onError: function(operation, error, template) {

    }
  }
});