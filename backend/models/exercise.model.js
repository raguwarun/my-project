const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type:String, required:true},
    worktype: {type: String, required:true, trim:true},
    alloteddate: {type:Date, required:true},
    engagementletter: {type: String, required:true},
    targetdate: {type: Date, required: true},
    period: {type: String, required:true, trim:true},
},{
    timestamps:true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;