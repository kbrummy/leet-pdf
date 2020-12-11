const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address_one: { 
    number: {type: Number, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true, min: [2, 'Use state abbreviation'],
    max: [2, 'Use state abbreviation']},
    zipcode: {type: String, required: true}
  },
  phone_number: { type: String, required: true },
  d_o_b: { type: Date, required: true },
  email_address: { type: String, required: true },
  sex: { type: String, required: true },
  citizenship: { type: Boolean, required: true },

  place_of_birth: { 
    city: {type: String, required: true},
    state: {type: String, required: true, min: [2, 'Use state abbreviation'],
    max: [2, 'Use state abbreviation']},
  },
  ss_number: { type: Number, required: true, min: [9, 'All numbers no spaces'],
  max: [9, 'All numbers no spaces']},
  alias_names: { type: String},
  been_married: { type: String, required: true },
  date_of_marriage: { type: Date},

  application_date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
