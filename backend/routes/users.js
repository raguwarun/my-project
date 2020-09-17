const router = require("express").Router();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load Input Validation
const validateLoginInput = require("../validation/login");
const User = require("../models/user.model");

router.route('/').get((req,res) => {
    User.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const status = req.body.status;
    const loginid = req.body.loginid;
    const password = req.body.password;
    const active = req.body.active;

    const newUser= new User ({name,status,loginid,password,active});

    //Hashing Password before saving into database
    bcrypt.genSalt(10, (err,salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save()
        .then(() => res.json("User Added"))
        .catch(err => res.status(400).json("Error : " + err));
      })  
    })
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User Deleted"))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(data => {
            data.name = req.body.name;
            data.status = req.body.status;
            data.loginid = req.body.loginid;
            data.password = req.body.password;
            data.active = req.body.active;

            data.save()
                .then(() => res.json("User Updated"))
                .catch(err => res.status(400).json("unable to update : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/login').post((req,res) => {
/*  const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    } */

    const loginid = req.body.loginid;
    const password = req.body.password;

    //Finding User
    User.findOne({ loginid }).then(user => {
         if (!user) {
            return res.status(404).json({ usernotfound : "User Not Identifies"});
        }

        // check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User Matched --> Create Payload
                const payload = {id : user.id, name : user.name, loginid : user.loginid};

            // Sign Token
             jwt.sign(
                payload, keys.secretOrKey,
                {
                    expiresIn : 31556926 // 10 minutes in seconds
                },
                (err,token) => {
                    res.json({success : true,token : "Bearer" + token});
                }
            );
        } else {
            return res.status(400).json({passwordincorrect : "Password Incorrect"});
        }
        });
    });
});

module.exports = router;