var mongoose =require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const addSchema = new Schema({
    username : String,
    usermobile :String,
    useremail: { type: String,  unique: true, required: true },
    userpassword:String,
    userStatus:String,

});
addSchema.plugin(uniqueValidator);

const userModel = mongoose.model('add_users', addSchema);

module.exports =userModel;