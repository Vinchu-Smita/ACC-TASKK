var validator =require('validator');

var userName_function = function(name){
    
    if(validator.isEmpty(name) ||  !validator.isAlpha(name,'en-IN')){
        return true;
    }
    else{
        return false;
    }
}
var userMobile_function = function(mobile){
    
    if(validator.isEmpty(mobile) || !validator.isMobilePhone(mobile,'en-IN') || !validator.isLength(mobile , {min:6,max:10})){
        return true;
    }
    else{
        return false;
    }
}
var userEmail_function = function(useremail){
    
    if(validator.isEmpty(useremail) || !validator.isEmail(useremail)){
        return true;
    }
    else{
        return false;
    }
}
var userPassword_function = function(userpassword){
    
    if(validator.isEmpty(userpassword) || !validator.isAlphanumeric(userpassword,'en-IN')
    ||!validator.isLength(userpassword , {min:4,max:8})){
        return true;
    }
    else{
        return false;
    }
}
module.exports={
    userName_function,
    userMobile_function,  
    userEmail_function ,
    userPassword_function,
    
    

}