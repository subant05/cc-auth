import express from "express";

const router = express.Router()

router.post("/",(req, res)=>{
    console.log(req.body)
    const {cardNumer} = req.body
    if(!cardNumer || isNaN(cardNumer) ){
        res.status(500)
        res.send("Invalid Card Number")
    }

    res.send("Valid")
})

export default router