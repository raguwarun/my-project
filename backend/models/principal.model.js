const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const principalSchema = new Schema({
    membershipno : {type:String, required:true},
    membername : {type:String, required:true},
    memberpan : {type:String, required:true},
    birthdate : {type : Date, required:true},
    passdate : {type : Date, required:true},
    joindate : {type : Date, required:true},
    exitdate : {type:Date},
    mobilenum : {type:Number, required:true},
    memberemail : {type:String, required:true},
    memaddress : {type:String, required:true},
},{
    timestamps : true,
});

const Principal = mongoose.model("Principal", principalSchema);

module.exports = Principal;