var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const enc_text = function(userContent){
    var hash = bcrypt.hashSync(userContent, salt);
    return hash;
}

module.exports = {
    enc_text   
}