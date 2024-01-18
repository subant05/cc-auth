import express from "express";
import  CreditCardAuth from "./credit-card-auth.js"


const childRouter = express.Router();
const parentRouter = express.Router();

childRouter.use("/cc-auth", CreditCardAuth);
parentRouter.use("/", childRouter)

export default parentRouter