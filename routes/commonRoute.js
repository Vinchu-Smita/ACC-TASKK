const express = require('express')
const router= express.Router();
var CommonCtrl =require("../controllers/commonController");
 
router.get("/",CommonCtrl.homepage)



router.get("/signup",CommonCtrl.loginpage)
router.post("/add-user",CommonCtrl.loginActionPage)

router.get("/showuser",CommonCtrl.showpage);
router.get("/delete/:showuserId",CommonCtrl.deletepageuser)

module.exports =router;