const express = require("express")
const router = express.Router()

router.route("/").get((req,res)=>{
    return res.send("GET ADMIN")
}).post((req,res)=>{
    return res.send("POST ADMIN")
}).put((req,res)=>{
    return res.send("PUT ADMIN")
}).delete((req,res)=>{
    return res.send("DELETE ADMIN")
})


router.patch("/reset-password",(req,res)=>{
    return res.send("PATCH RESET ADMIN PASSWORD")
})


router.patch("/forget-password",(req,res)=>{
    return res.send("PATCH FOEGET PASSWORD")
})


router.patch("/profile-image",(req,res)=>{
    return res.send("PATCH ADMIN PROFILE IMAGE")
})

router.delete("/profile-image",(req,res)=>{
    return res.send("DELETE ADMIN PROFILE IAMGE")
})

router.use("/report",require("./adminRouter/report"))

module.exports = router