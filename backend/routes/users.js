const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const groupname = req.body.groupname;
  const status = req.body.status;
  const dob = Date.parse(req.body.dob);
  const pan = req.body.pan;
  const itpw = req.body.itpw;
  const gstin = req.body.gstin;
  const gstld = req.body.gstld;
  const bnkld = req.body.bnkld;

  const newUser = new User({id,username,groupname,status,dob,pan,itpw,gstin,gstld,bnkld});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res)=>{
  User.findByIdAndDelete(req.params.id)
      .then(()=> res.json('User Deleted'))
      .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:id').post((req,res)=>{
  User.findById(req.params.id)
      .then(user => {
              user.username =req.body.username;
              user.status=req.body.status;
              user.groupname=req.body.groupname;
              user.dob= Date.parse(req.body.dob);
              user.pan=req.body.pan;
              user.itpw=req.body.itpw;
              user.gstin=req.body.gstin;
              user.gstld=req.body.gstld;
              user.bnkld=req.body.bnkld;
              user.id = req.body.id;

          user.save()
              .then(() => res.json('User updated!'))
              .catch(err => res.status(400).json('Error : ' + err));
      })
      .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;