//TODO move it to more appropriate place or find better solution
Meteor.publish("users", function() {
  return Meteor.users.find({}, { fields: { 'profile.name': 1 } });
});