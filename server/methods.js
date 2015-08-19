Meteor.methods({

  addDonation: function(donation) {
    Donations.insert(donation);
    Email.send({
      from: "donationreceipt@sfgoodwill.org",
      to: donation.email,
      subject: "Hi " + donation.fName + " " + donation.lName + ", thank you for your donation to SF Goodwill.",
      html: "What's up " + donation.fName + "?"
    });

  },

  addEWaste: function(donation) {
    if ( ! Meteor.userId()) {
      console.log("not-authorized");
    }
    else {
      console.log(donation);

      EWaste.insert(donation);
    }
    //var html = '<html><body>Dear ' +  donation.fName + ' ' + donation.lName + ',<br/><br/>Here is a summary of your donation:<br/><br/><strong>Donation Date:</strong> ' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '<br/><strong>Receipt Number:</strong> ' + "\"receipt\"" + '<br/> ';

    Email.send({
      from: "donationreceipt@sfgoodwill.org",
      to: donation.email,
      subject: "Hi " + donation.fName + " " + donation.lName + ", your Goodwill Donation Receipt is here.",
      html: "What's up " + donation.fName + "?"
    });

  }
});
