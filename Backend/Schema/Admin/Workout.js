import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    exercises: [
        {
            exerciseType: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ExerciseType",
                required: true,
            },
            sets: Number,
            reps: Number,
            weights: Number,
        }
    ]
});

export default mongoose.model("Workout", workoutSchema);