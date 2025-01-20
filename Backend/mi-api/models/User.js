import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: ''},
    role: {type: String, enum: ['admin', 'user'], default: 'user'},
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);
