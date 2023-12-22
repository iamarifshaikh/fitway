import mongoose from "mongoose";

const FitnessSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  BMI: {
    type: Number,
    required: true,
  },
  workoutType: {
    type: String,
    enum: ['Cardio', 'Strength Training', 'Yoga', 'Normal Workout', 'Weight Gain', 'Muscle Gain'],
    required: true,
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    }
  },
});

const Fitness = mongoose.model('Fitness', FitnessSchema);

export default Fitness;
