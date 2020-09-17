const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  id:{type : "String", required:true},
  username: {type: String,required: true,trim: true,minlength: 3},
  groupname :{type : String, required : true, trim:true},
  status: {type:String,required:true,minlength:3},
  dob: {type : Date,required:true,},
  pan: {type:String},
  itpw:{type:String},
  gstin: {type:String},
  gstld : {type:Array},
  bnkld : {type:Array},
}, {
  timestamps: true,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;