const router = require("express").Router();
let Principal = require("../models/principal.model");

router.route('/').get((req,res) => {
    Principal.find()
        .then(principals => res.json(principals))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/add').post((req,res) => {
    const membershipno  = req.body.membershipno ;
    const membername  = req.body.membername ;
    const memberpan  = req.body.memberpan ;
    const birthdate  = req.body.birthdate ;
    const passdate  = req.body.passdate ;
    const joindate  = req.body.joindate ;
    const exitdate  = req.body.exitdate ;
    const mobilenum  = req.body.mobilenum ;
    const memberemail  = req.body.memberemail ;
    const memaddress  = req.body.memaddress ;

    const newPrincipal = new Principal({
        membershipno ,
        membername ,
        memberpan ,
        birthdate ,
        passdate ,
        joindate ,
        exitdate ,
        mobilenum ,
        memberemail ,
        memaddress ,
    });

    newPrincipal.save()
        .then(() => res.json("Principal Added"))
        .catch(err => res.status(400).json("Error : " + err));

});

router.route('/:id').get((req,res) => {
    Principal.findById(req.params.id)
        .then(principal => res.json(principal))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res) => {
    Principal.findByIdAndDelete(req.params.id)
        .then(() => res.json("Principal Deleted"))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/update/:id').post((req,res)=>{
    Principal.findById(req.params.id)
        .then(exercise => {
            exercise.membershipno = req.body.membershipno;
            exercise.membername = req.body.membername;
            exercise.memberpan = req.body.memberpan;
            exercise.birthdate = Date.parse(req.body.birthdate);
            exercise.passdate = Date.parse(req.body.passdate);
            exercise.joindate = Date.parse(req.body.joindate);
            exercise.exitdate = Date.parse(req.body.exitdate);
            exercise.mobilenum = req.body.mobilenum;
            exercise.memberemail = req.body.memberemail;
            exercise.memaddress = req.body.memaddress;

            exercise.save()
                .then(() => res.json('Principal updated!'))
                .catch(err => res.status(400).json('Error in updating : ' + err));
        })
        .catch(err => res.status(400).json('Error on finding : ' + err));
});

module.exports = router;