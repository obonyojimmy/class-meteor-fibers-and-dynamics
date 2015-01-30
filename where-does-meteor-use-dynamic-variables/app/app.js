if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.methods({
    '/dynamic': function() {
      debugger;
      return;
    }
  });
}
