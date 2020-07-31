const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    registrationnum : {type:String, required:true},
    articlename : {type:String, required:true},
    principalname : {type:String, required : true},
    birthdate : {type : Date, required:true},
    passdate : {type : Date, required:true},
    joindate : {type : Date, required:true},
    exitdate : {type:String},
    mobilenum : {type:Number, required:true},
    articlemail : {type:String, required:true},
    articleaddress : {type:String, required:true},
    otherdetails : {type:String, required:true},
},{
    timestamps : true,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;