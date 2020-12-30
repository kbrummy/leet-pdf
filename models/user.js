const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  const saltRounds = 5;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

const UserSchema = new Schema({

  first_name: {
    type: String,
    trim: true,
    required: [true, "First Name is Required"]
  },
  last_name: {
    type: String,
    trim: true,
    required: [true, "Last Name is Required"]
  },
  email_address: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
    password: {
    type: String,
    required: [true, 'Password required']
  }
});

UserSchema.pre('save', function (next) {
  if (this.password) {
    this.password = hashPassword(this.password)
  }
  next()
});

UserSchema.plugin(passportLocalMongoose, { usernameField : 'email_address' });
const User = mongoose.model("User", UserSchema);

module.exports = User;
