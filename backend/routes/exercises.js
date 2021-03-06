const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error Start : ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const worktype = req.body.worktype;
  const principalname = req.body.principalname;
  const articlename = req.body.articlename;
  const workCompleted = req.body.workCompleted;
  const udin = req.body.udin;
  const alloteddate = Date.parse(req.body.alloteddate);
  const engagementletter = req.body.engagementletter;
  const targetdate = Date.parse(req.body.targetdate);
  const period = req.body.period;

  const newExercise = new Exercise({
    username,
    worktype,
    principalname,
    articlename,
    alloteddate,
    engagementletter,
    targetdate,
    period,
    workCompleted,
    udin,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error End: ' + err));
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.worktype = req.body.worktype;
            exercise.articlename= req.body.articlename;
            exercise.principalname = req.body.principalname;
            exercise.alloteddate = Date.parse(req.body.alloteddate);
            exercise.engagementletter = req.body.engagementletter;
            exercise.targetdate = Date.parse(req.body.targetdate);
            exercise.workCompleted = req.body.workCompleted;
            exercise.udin = req.body.udin;
            exercise.period = req.body.period;

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;