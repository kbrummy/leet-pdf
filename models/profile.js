const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { 
    number: {type: Number, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true, min: [2, 'Use state abbreviation'],
    max: [2, 'Use state abbreviation']},
    zip: {type: String, required: true}
  },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  sex: { type: String, required: true },
  citizenship: { type: Boolean, required: true },
  applicationDate: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
