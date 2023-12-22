import mongoose from 'mongoose';

const AdminSignUp = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    }, 
});

export default mongoose.model('AdminSignUp', AdminSignUp);