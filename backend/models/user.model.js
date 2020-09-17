const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {type: String, required:true},
    loginid : {type : String, required: true},
    password : {type : String, required:true},
    status : {type:String, required : true},
    active : {type: Boolean}
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;