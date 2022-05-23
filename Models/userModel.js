const mongoose = require("../database");
 
// create an schema
var Schema = mongoose.schema

var userSchema = new Schema({
            name: String,
            email:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);