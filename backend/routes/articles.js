const router = require("express").Router();
let Article = require("../models/article.model")

router.route('/').get((req,res) => {
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/add').post((req,res) => {
    const registrationnum = req.body.registrationnum;
    const articlename = req.body.articlename;
    const principalname = req.body.principalname;
    const birthdate  = req.body.birthdate ;
    const passdate  = req.body.passdate ;
    const joindate  = req.body.joindate ;
    const exitdate  = req.body.exitdate ;
    const mobilenum  = req.body.mobilenum ;
    const articlemail = req.body.articlemail;
    const articleaddress = req.body.articleaddress;
    const otherdetails = req.body.otherdetails;

    const newArticle = new Article ({
        registrationnum ,
        articlename,
        principalname,
        birthdate ,
        passdate ,
        joindate ,
        exitdate ,
        mobilenum ,
        articlemail,
        articleaddress,
        otherdetails,
    });

    newArticle.save()
        .then(() => res.json("Article Added"))
        .catch(err => res.status(400).json("Error : " + err));

});

router.route('/:id').get((req,res) => {
    Article.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json("Article Deleted"))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/update/:id').post((req,res) => {
    Article.findById(req.params.id)
        .then(data => {
            data.registrationnum = req.body.registrationnum;
            data.articlename = req.body.articlename;
            data.principalname = req.body.principalname;
            data.birthdate  = req.body.birthdate ;
            data.passdate  = req.body.passdate ;
            data.joindate  = req.body.joindate ;
            data.exitdate  = req.body.exitdate ;
            data.mobilenum  = req.body.mobilenum ;
            data.articlemail = req.body.articlemail;
            data.articleaddress = req.body.articleaddress;
            data.otherdetails = req.body.otherdetails;

            data.save()
                .then(() => res.json("article Updated"))
                .catch(err => res.status(400).json("unable to update : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;