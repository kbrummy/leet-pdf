const express = require('express');
const router = express.Router();
const passport = require('../../config/passport');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

router.post(
	'/login',
	function (req,res,next) {
	// return failure if email address was not included
	if (!req.body.email_address) { 
		console.log('user did not include email address');
		return res.json({success: false, message: "Email was not given"}) 
	} 

	// return failure if password was not included
    if (!req.body.password) {
		console.log('user did not include password')
		return res.json({success: false, message: "Password was not given"})
	}   

	// everything appears to be included
	console.log('username and password included... authenticating user.');
	
	// attempt to authenticate user
	passport.authenticate(
	'local',
	function (err, user, info) {
	  // return failure if error
	  if (err) {
		return res.json({success: false, message: err})
	  }
	  // return failure if user is not found
	  if (!user) {
		console.log('user account was not found');
		return res.json({success: false, message: 'user account was not found'})
	  }
	  // return login if user is found
	  req.login(user, function (err) {
		console.log('user account was found in db');
		if (err) {
		  return res.json({success: false, message: err})
		}
		// create token for user
		const token = jwt.sign({user_id: user._id, email_address: user.email_address},
		  process.env.SECRET,
		  {
			expiresIn: '24h'
		  }
		);
		// return payload with user session
		return res.json({success: true, message: "Authentication successful", token: token});
	  })

	}
  )

  // return request, response & next`
  (req, res, next);

});


router.post("/register", function (req, res) {

  let user = new User();
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.email_address = req.body.email_address;
  user.password = req.body.password;

  User.register(user, req.body.password, function (err, user) {
    if (err) {
      console.log('err', err);
      return res.status(400).json({message: err.errmsg});
    }

    // create token for user
    const token = jwt.sign({userId: user._id, email_address: user.email_address},
      process.env.SECRET,
      {
        expiresIn: '24h'
      }
    );
    // return payload as though user passed the authentication scenario
    return res.json({success: true, token: token, message: "user registration successful"})
  });
});

router.get(
  "/isLoggedInTest",
  passport.authenticate('jwt', {session: false}),
  function (req, res) {
    console.log('if i got in here it means the user is logged in ');
    res.send({user: req.user, message: 'if i got in here it means the user is logged in'});
  }
);

router.get("/test", function (req, res) {
  console.log("/test")
  res.send(console.log("this is the back end"))
})

module.exports = router;