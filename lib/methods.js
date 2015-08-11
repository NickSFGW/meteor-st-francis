Meteor.methods({

  addDonation: function(donation) {
    Donations.insert(donation);
    Email.send({
      from: "donationreceipt@sfgoodwill.org",
      to: donation.email,
      subject: "Goodwill Donation Receipt ",
      html: "What's up James?"
    });
  },

  addEWaste: function(donation) {
    if ( ! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    EWaste.insert(donation);

    var html = '<html><body>Dear ' +  donation.fName + ' ' + donation.lName + ',<br/><br/>Here is a summary of your donation:<br/><br/><strong>Donation Date:</strong> ' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '<br/><strong>Receipt Number:</strong> ' + "\"receipt\"" + '<br/> ';

    Email.send({
      from: "donationreceipt@sfgoodwill.org",
      to: donation.email,
      subject: "Goodwill Donation Receipt ",
      html: "What's up James?"
    });
  }
});