Template.body.events({
  "click .simple-form-radio": function(event) {
    Session.set("selectedForm", false);
  },
  "click .ewaste-form-radio": function(event) {
    Session.set("selectedForm", true);
  }
});

Template.simpleForm.events({

  "submit .donation-form": function(event, template) {
    event.preventDefault();

    var donation = {
      fName: event.target.fName.value,
      lName: event.target.lName.value,
      zipCode: event.target.zipCode.value,
      email: event.target.email.value
    };

    Meteor.call("addDonation", donation);

    template.find(".donation-form").reset();
  }
});

Template.eWasteForm.events({

  "submit .ewaste-form": function(event, template) {
    event.preventDefault();

    var donation = {
      fName: event.target.fName.value,
      lName: event.target.lName.value,
      street: event.target.street.value,
      city: event.target.city.value,
      zipCode: event.target.zipCode.value,
      state: event.target.state.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      laptops: event.target.laptops.value,
      monitorsRear: event.target.rear.value,
      monitorsFlat: event.target.flat.value,
      crts: event.target.crts.value,
      createdAt: new Date()
    };

    Meteor.call("addEWaste", donation);

    template.find(".ewaste-form").reset();
    

  }

});