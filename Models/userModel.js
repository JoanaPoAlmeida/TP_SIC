const mongoose = require("../database");
 
// create an schema
const userSchema = new mongoose.Schema({
            name: String,
            email:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);