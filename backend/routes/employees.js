const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route('/').get((req,res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/add').post((req,res) => {
    const employeename = req.body.employeename;
    const empfathername = req.body.empfathername;
    const employeepan = req.body.employeepan;
    const birthdate = Date.parse(req.body.birthdate);
    const joindate = Date.parse(req.body.joindate);
    const exitdate = Date.parse(req.body.exitdate);
    const mobilenum = req.body.mobilenum;
    const employeeemail = req.body.employeeemail;
    const employeeaddress = req.body.employeeaddress;
    const employeedetails = req.body.employeedetails;

    const newEmployee = new Employee({
        employeename,
        empfathername,
        employeepan,
        birthdate,
        joindate,
        exitdate,
        mobilenum,
        employeeemail,
        employeeaddress,
        employeedetails,
    })

    newEmployee.save()
        .then(() => res.json("employee Added"))
        .catch(err => res.status(400).json("Error : " + err));

});

router.route('/:id').get((req,res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/:id').delete((req,res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json("employee Deleted"))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/update/:id').post((req,res) => {
    Employee.findById(req.params.id)
        .then(data => {
            data.employeename = req.body.employeename ;
            data.empfathername = req.body.empfathername ;
            data.employeepan = req.body.employeepan ;
            data.birthdate = req.body.birthdate ;
            data.joindate = req.body.joindate ;
            data.exitdate = req.body.exitdate ;
            data.mobilenum = req.body.mobilenum ;
            data.employeeemail = req.body.employeeemail ;
            data.employeeaddress = req.body.employeeaddress ;
            data.employeedetails = req.body.employeedetails ;

            data.save()
                .then(() => res.json("User Updated"))
                .catch(err => res.status(400).json("unable to update : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;