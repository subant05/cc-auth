import express from "express";


const router = express.Router()

const validateNumber = (numbers) =>{
    const numbersArray =  numbers.toString().split("").map((digit)=>parseInt(digit))
    let checksum = 0, valid = false;

    numbersArray.reverse().forEach( (number,index) => {
        let parsedDigit = parseInt(number, 10);

        if (valid) {
            if ((parsedDigit *= 2) > 9) 
                parsedDigit -= 9;
        }
        
        checksum += parsedDigit;
        valid = !valid;
    })

    console.log("Checksum", checksum)

    return (checksum % 10) == 0;
}

router.post("/",(req, res)=>{
    console.log(req.body)
    const {cardNumber} = req.body
    if(!cardNumber || isNaN(cardNumber) || !validateNumber(cardNumber) ){
        res.status(500)
        res.send("Invalid Card Number")
    } else {
        setTimeout(()=>res.send("Valid"), 3000)
        // res.send("Valid")

    }

})

export default router