const db = require("../models");

module.exports={
    create:(req, res)=>{
        console.log(req.body)
        db.Profile
        .create(req.body)
        .then(newProfile => res.json(newProfile))
        .catch(err => res.status(422).json(err));
    }
}