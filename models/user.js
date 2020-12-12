const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({

    first_name: {
      type: String,
      trim: true,
      required: "First Name is Required"
    },
    last_name: {
        type: String,
        trim: true,
        required: "Last Name is Required"
      },
    email_address: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
  
  });

  

UserSchema.plugin(passportLocalMongoose, { usernameField : 'email_address' });
const User = mongoose.model("User", UserSchema);

module.exports = User;
