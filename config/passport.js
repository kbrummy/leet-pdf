const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email_address"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    User.findOne({email_address: email})
    .then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Unable to locate user account"
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      bcrypt.compare(password, dbUser.password, (err, res) => {
        if (res){
          console.log("Passwords Match!");
          return done(null, dbUser);
        }
        else {
          console.log("Passwords DO NOT MATCH!!!!");
          return done(null, false, {
            message: "Incorrect password."
          });
        }
      })
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// Exporting our configured passport
module.exports = passport;
