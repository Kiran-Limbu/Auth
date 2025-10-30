import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: [6, "Username should be 6 letter long"]
    }, email: {
        type: String,
        require: true,
        unique: true
    }, password: {
        type: String,
        require: true,
        minlength: [6, "Password must be 6 letter long"]
    }
})

const userModel = mongoose.model('User', userSchema);

export default userModel;

