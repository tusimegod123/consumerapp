//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
var registerSchema = new mongoose.Schema({
    email: String,
    password: String

});
registerSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model("User", registerSchema);
