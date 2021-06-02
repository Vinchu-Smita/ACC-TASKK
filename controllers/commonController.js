var validation= require("../middleware/validation");
var addM =require("../model/loginModel")
const encryptpwd = require('encrypt-with-password');
var pass_data = require('../middleware/pass');
var homepage= function(req,res){
    res.render("homepage")
}


var loginpage=function(req,res){
res.render("loginpage");
}

var loginActionPage=function(req,res){
    console.log(req.body);
    if(validation.userName_function(req.body.uname)){
        res.send({msg1:"invalid Name"})
    }

    else if(validation.userMobile_function(req.body.umobile)){
        res.send({msg3:"invalid Mobile Number"})
    }
    else if(validation.userEmail_function(req.body.uemail)){
        res.send({msg4:"invalid Email ID"})
    }
    else if(validation.userPassword_function(req.body.upass)){
        res.send({msg4:"invalid Password"})
       
    }
    
   else{
    var enc_pass = pass_data.enc_text(req.body.upass);
    req.body.userStatus = 0;
    req.body.upass= enc_pass;
    //    console.log(req.body);
    //    const instance=  new addM(req.body);
       const instance = new addM({
        username: req.body.uname,
        usermobile: req.body.umobile,
        useremail: req.body.uemail,
        userpassword:enc_pass.upass,
       
     });
     instance.save(function (err,result) {
        if(err){
            // res.send({msg:"Email Id Already Exist"})
            console.log(result)
        }
        else{
            res.send({msg:"Successfully Added "})
            console.log(err)

        }
});
            // res.send({msg:"Successfully Added "})
}
}

var showpage=function(req,res){
    addM.find().then(function(result){
        if(result.length>0){
            // console.log(result)
            res.render("showpage",{smita:result})
        }
    })
    // res.render("showpage");
}
var deletepageuser=function(req,res){
    // console.log(req.params);
    addM.remove({_id:req.params.showuserId},function(err,doc){
        if(!err){
            res.redirect("/signup")
        }
    })
}
module.exports={
    homepage,
    loginpage,
    loginActionPage,
    loginActionUserPage,
    showpage,
    deletepageuser,

}