Meteor.methods({

  addDonation: function(donation) {
    Donations.insert(donation);
  },

  addEWaste: function(donation) {
    if ( ! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    EWaste.insert(donation);
  }
});