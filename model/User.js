import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: "User",
        enum: ["Admin", "User"]
    }

}, {timestamps: true});

const User = mongoose.model("Users", userSchema);

export default User;