const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  || new mongoose.Schema
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

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.hash);
}

UserSchema.methods.setPassword = function(password) {
    this.hash = bcrypt.hashSync(password, 10);
}

UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        _id: this._id,
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.jwtSecret);
}

// OR THIS 
UserSchema.plugin(passportLocalMongoose, { usernameField : 'email_address' });
const User = mongoose.model("User", UserSchema);

module.exports = User;
// module.exports = mongoose.model('Users', UserSchema);