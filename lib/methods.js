Meteor.methods({
  addDonation: function(donation) {
    if ( ! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Donations.insert(donation);
  },
  addEWaste: function(donation) {
    if ( ! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    EWaste.insert(donation);
  }
});