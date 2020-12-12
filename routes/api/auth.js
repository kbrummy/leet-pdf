const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

router.get("/test", function(req, res){
	console.log("you hit me!")
	res.send(console.log("this is the back end"))
})

router.post("/register", function(req, res){
    let user = new User();
    console.log('req.body', req.body);
	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.email_address = req.body.email_address;
	user.setPassword(req.body.password);
	console.log(User)
	User.register(user, req.body.password,function(err,user){
    console.log('err', err);
		if(err){
			return res.status(400).json({message:err.errmsg});
		};
		res.json({success: true, message: "Your account has been saved"}) 
        
	});
});

router.post('/login',function(req,res,next){
	console.log("in server login route");
	if(!req.body.email_address){ 
		res.json({success: false, message: "Email was not given"}) 
	  } else { 
		if(!req.body.password){ 
		  res.json({success: false, message: "Password was not given"}) 
		}else{ 
		  passport.authenticate('local', function (err, user, info) {  
			 if(err){ 
			   res.json({success: false, message: err}) 
			 } else{ 
			  if (! user) { 
				res.json({success: false, message: 'email or password incorrect'}) 
			  } else{ 
				req.login(user, function(err){ 
				  if(err){ 
					res.json({success: false, message: err}) 
				  }else{ 
					const token =  jwt.sign({userId : user._id,  
					   email_address:user.email_address}, secretkey,  
						{expiresIn: '24h'}) 
					res.json({success:true, message:"Authentication successful", token: token }); 
				  } 
				}) 
			  } 
			 } 
		  })(req, res); 
		} 
	  }

});


router.get("/isLoggedInTest", passport.authenticate('jwt', { session: false }), function(req, res){	
	console.log('if i got in here it means the user is logged in ');

  	res.send({user: req.user, message: 'if i got in here it means the user is logged in'});
});

module.exports = router;