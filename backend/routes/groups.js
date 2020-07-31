const router = require('express').Router();
let Group = require("../models/group.model");

router.route('/').get((req , res)=>{
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error :' + err)); 
});

router.route('/add').post((req, res) => {
    const groupname = req.body.groupname;
  
    const newGroup = new Group({
      groupname,
    });
  
    newGroup.save()
    .then(() => res.json('Group added!'))
    .catch(err => res.status(400).json('Error End: ' + err));
  });

  router.route('/:groupname').get((req,res)=>{
      Group.findOne({"groupname" : req.params.groupname})
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error : ' + err));
  });

  router.route('/:groupname').delete((req,res) =>{
      Group.findOneAndDelete({"groupname" : req.params.groupname})
        .then(()=> res.json("Group Deleted"))
        .catch(err => res.status(400).json("Error : " + err));
  });

  router.route('/update/:groupname').post((req,res)=>{
    Group.findOne({"groupname" : req.params.groupname})
        .then(group => {
            group.groupname = req.body.groupname;

            group.save()
                .then(() => res.json("Group Updated"))
                .catch(err => res.status(400).json("error : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
  });

module.exports = router;