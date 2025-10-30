import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"

const registerUser = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("All filed are required");
    }

    const allreadyExistUser = await userModel.findOne({email});
    if(allreadyExistUser){
        return res.status(400).send("User allready exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const newUser = new userModel({username, email, password: hashPassword})

    try {
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        })

    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

export { registerUser }
