const mongoose = require("../database");
 
// create an schema
var recipeSchema = new mongoose.Schema({
            name: String,
            category:String
        });
 
var recipeModel=mongoose.model('recipe',recipeSchema);
 
module.exports = mongoose.model("Users", recipeModel);
