const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  
  d_o_b: { type: Date, required: true },
  
  sex: { type: String, required: true },
  
  place_of_birth: { 
    city: {type: String, required: true},
    state: {type: String, required: true, min: [2, 'Use state abbreviation'], max: [2, 'Use state abbreviation']},
  },
  
  ss_number: { type: Number, required: true, min: [9, 'All numbers no spaces'], max: [9, 'All numbers no spaces']},
  
  email_address: { type: String, required: true },
  
  phone_number: { type: String, required: true },
  
  address_one: { 
    number: {type: Number, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true, min: [2, 'Use state abbreviation'],
    max: [2, 'Use state abbreviation']},
    zipcode: {type: String, required: true},
    country: {type: String, required: true, min: [2, 'Use state abbreviation'],
    max: [2, 'Use country abbreviation']},
  },
  
  other_names_used: { type: String},
  more_names_used: { type: String},
  
  parent_one_first_and_middle_name: { type: String},
  parent_one_last_name: {type: String},
  parent_one_dob: { type: Date},
  parent_one_place_of_birth: {type: String},
  parent_one_sex: {type: String}, 
  parent_one_citizenship: { type: Boolean},
  parent_two_first_and_middle_name: { type: String},
  parent_two_last_name: {type: String},
  parent_two_dob: { type: Date},
  parent_two_place_of_birth: {type: String},
  parent_two_sex: {type: String},
  parent_two_citizenship: { type: Boolean},

  been_married: { type: Boolean},
  full_name_of_spouse: {type: String},
  current_spouse_dob: {type: Date},
  current_spouse_place_of_birth: {type: String},
  current_spouse_citizenship: {type: Boolean},
  date_of_marriage: { type: Date},
  widowed_or_divorced: {type: Boolean},
  widow_divorce_date: {type: Date},

  additional_phone_number: {type: String},

  occupation: {type: String},

  employer_or_school: {type: String},

  height: {type: String},

  hair_color: {type: String},

  eye_color: {type: String},

  departure_date: {type: Date},
  return_date: {type: Date},
  countries_to_be_visited: {type: String},

  permanent_address: {type: String},
  perm_apartment: {type: String},
  perm_city: {type: String},
  perm_state: {type: String, min: [2, 'Use state abbreviation'],     max: [2, 'Use state abbreviation']},
  perm_zip: {type: String},

  em_contact_name: {type: String},
  em_contact_address: {type: String},
  em_contact_apartment: {type: String},
  em_contact_city: {type: String},
  em_contact_state: {type: String, min: [2, 'Use state abbreviation'],     max: [2, 'Use state abbreviation']},
  em_contact_zip_code: {type: String},
  em_contact_phone: {type: String},
  em_contact_relationship: {type: String},

  recent_passport: {type: Boolean},
  recent_passport_printed_name: {type: String},
  recent_passport_book_numbner: {type: String},
  recent_passport_issue_date: {type: String},
  recent_passport_card_printed_name: {type: String},
  recent_passport_card_number: {type: String},
  recent_passport_card_issue_date: {type: String},

});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
