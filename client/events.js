Template.body.events({
  "click .simple-form-menu": function(event) {
    Session.set("selectedForm", false);
  },
  "click .ewaste-form-menu": function(event) {
    Session.set("selectedForm", true);
  },
});

Template.eWasteForm.onRendered(function () {
    $('select').material_select();
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
      //location: template.find("li.active>span").innerHTML,
      location: template.find('.locations').value,
      laptops: Math.abs(event.target.laptops.value),
      monitorsRear: Math.abs(event.target.rear.value),
      monitorsFlat: Math.abs(event.target.flat.value),
      crts: Math.abs(event.target.crts.value),
      createdAt: new Date()
    };

    Meteor.call("addEWaste", donation);

    //template.find(".ewaste-form").reset();
  }

});
