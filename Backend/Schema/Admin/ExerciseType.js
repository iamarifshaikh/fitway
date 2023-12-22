import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
    },
    muscleGroup: {
        type: String,
    }
});

export default mongoose.model("ExerciseType", exerciseSchema);