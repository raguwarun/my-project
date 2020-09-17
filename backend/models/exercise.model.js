const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type:String, required:true},
    worktype: {type: String, required:true, trim:true},
    principalname:{type: String},
    articlename:{type: Array},
    alloteddate: {type:Date, required:true},
    engagementletter: {type: String, required:true},
    targetdate: {type: Date, required: true},
    period: {type: String, required:true, trim:true},
    workCompleted : {type: String},
    udin : {type: String},
},{
    timestamps:true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;