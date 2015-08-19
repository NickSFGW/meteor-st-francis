var Schemas = {};

//General donations
Donations = new Mongo.Collection("donations");

Schemas.Donation = new SimpleSchema({
  fName: {
    type: String,
    label: "First Name",
  },
  lName: {
    type: String,
    label: "Last Name"
  },
  zipCode: {
    type: Number,
    label: "Zip Code",
    regEx: SimpleSchema.RegEx.ZipCode
  },
  email: {
    type: String,
    label: "Email address",
    regEx: SimpleSchema.RegEx.Email
  }
});

Donations.attachSchema(Schemas.Donation);

donationContext = Schemas.Donation.namedContext("donationForm");


//Donations for eWaste
EWaste = new Mongo.Collection("ewaste");

Schemas.EWaste = new SimpleSchema({
  fName: {
    type: String,
    label: "First Name",
  },
  lName: {
    type: String,
    label: "Last Name"
  },
  street: {
    type: String,
    label: "Street address",
  },
  city: {
    type: String,
    label: "City"
  },
  zipCode: {
    type: Number,
    label: "Zip Code",
    regEx: SimpleSchema.RegEx.ZipCode
  },
  state: {
    type: String,
    label: "State",
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  email: {
    type: String,
    label: "Email address",
    regEx: SimpleSchema.RegEx.Email
  },
  phone: {
    type: String,
    label: "Phone number",
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  },
  location: {
    type: String,
    label: "Donation site",
  },
  createdAt: {
    type: String
  }
});

EWaste.attachSchema(Schemas.EWaste);

ewasteContext = Schemas.EWaste.namedContext("ewasteForm");
