import mongoose from "mongoose";

const UserSignUp = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    fitness: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fitness',
    },
    timestamps: {
        createdAt:{
            type: Date,
            default: Date.now(),
        },
        updatedAt:{
            type: Date,
            default: Date.now(),
        }
    },
});

export default mongoose.model('User', UserSignUp);