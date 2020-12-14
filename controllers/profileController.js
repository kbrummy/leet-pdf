const db = require("../models");

module.exports={
    create:(req, res)=>{
        req.body._id = req.body.first_name + "_" + req.body.last_name;
        console.log(req.body);
        db.Profile
        .create(req.body)
        .then(newProfile => res.json(newProfile))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Profile
        .findById(req.params.id)
        .then(profile => res.json(profile))
        .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.Profile
        .find()
        .select(['_id', 'first_name', 'last_name'])
        .then(profiles => res.json(profiles))
        .catch(err => res.status(422).json(err));
    }
};