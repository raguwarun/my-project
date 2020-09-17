const router = require('express').Router();
let Client = require('../models/client.model');

router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
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

  const newClient = new Client({id,username,groupname,status,dob,pan,itpw,gstin,gstld,bnkld});

  newClient.save()
    .then(() => res.json('Client added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
  Client.findById(req.params.id)
    .then(client => res.json(client))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res)=>{
  Client.findByIdAndDelete(req.params.id)
      .then(()=> res.json('User Deleted'))
      .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:id').post((req,res)=>{
  Client.findById(req.params.id)
      .then(data => {
            data.username =req.body.username;
            data.status=req.body.status;
            data.groupname=req.body.groupname;
            data.dob= Date.parse(req.body.dob);
            data.pan=req.body.pan;
            data.itpw=req.body.itpw;
            data.gstin=req.body.gstin;
            data.gstld=req.body.gstld;
            data.bnkld=req.body.bnkld;
            data.id = req.body.id;

            data.save()
              .then(() => res.json('Client updated!'))
              .catch(err => res.status(400).json('Error : ' + err));
      })
      .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;