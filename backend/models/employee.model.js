const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeename : {type:String, required:true},
    empfathername : {type : String, required:true},
    employeepan : {type:String, required:true},
    birthdate : {type : Date, required:true},
    joindate : {type : Date, required:true},
    exitdate : {type:String},
    mobilenum : {type:Number, required:true},
    employeeemail : {type:String, required:true},
    employeeaddress : {type:String, required:true},
    employeedetails : {type: String, required:true},
},{
    timestamps : true,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;