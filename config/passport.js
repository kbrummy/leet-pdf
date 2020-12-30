var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models/user");
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email_address"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.findOne({
      where: {
        email_address: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;



// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var mongoose = require('mongoose');
// var User = mongoose.model('Users');

// var JwtStrategy = require('passport-jwt').Strategy,
// ExtractJwt = require('passport-jwt').ExtractJwt;

// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromHeader('login_token');
// opts.secretOrKey = process.env.jwtSecret;

// module.exports = function(passport) {

//     passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//         console.log('jwt_payload', jwt_payload);

//         User.findOne({_id: jwt_payload._id}, function(err, user) {
//             user.hash = undefined;
//             if (err) {
//                 return done(err, false);
//             }
//             if (user) {
//                 return done(null, user);
//             } else {
//                 return done(null, false);
//                 // or you could create a new account
//             }
//         });
//     }));

//     passport.use('local', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password'
//     },
//         function (username, password, done) {
//             User.findOne({email: username}).exec(function (err, user) {
//                 if (err) {
//                     return done(err);
//                 }
//                 if (!user) {
//                     return done(null, false, {message: 'Incorrect username.'});
//                 }
//                 if (!user.validPassword(password)) {
//                     return done(null, false, {message: 'Incorrect password.'});
//                 }
//                 user.hash = undefined;
//                 return done(null, user);
//             });
//         }
//     ));
// }