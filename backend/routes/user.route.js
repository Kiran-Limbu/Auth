import express from "express";
import { registerUser } from "../controller/user.controller.js";
import {body} from "express-validator"

const router = express.Router();

router.post("/register",[
    body('username').isLength({ min: 6 }).withMessage('Username should be 6 letter long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6}).withMessage('Password must be 6 letter long')
], registerUser);


export default router;
