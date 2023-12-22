import User from '../../Schema/User/signup.js';
import Workout from "../../Schema/Admin/Workout.js";
import Exercise from "../../Schema/Admin/ExerciseType.js";
import fitness from "../../Schema/User/fitness.js";
import { Problem, Success } from "../../Custom/Message.js";

export const getAllUsers = async (request, response, next) => {
    console.log("getall user is running")
    try {
        // Fetch All Users.
        const users = await User.find();
        
        // Fetch fitness data for each user
        const populatedUsers = await Promise.all(users.map(async (user) => {
            const fitnessData = await fitness.findOne({ user: user._id });
            return {
                _id: user._id,
                username: user.username,
                email: user.email,
                weight: fitnessData ? fitnessData.weight : null,
                height: fitnessData ? fitnessData.height : null,
                age: fitnessData ? fitnessData.age : null,
                workoutType: fitnessData ? fitnessData.workoutType : null,
            };
        }));

        // Respond with the list of populated users.
        response.status(200).json(populatedUsers);
        console.log(populatedUsers)
    } catch (error) {
        console.error(error);
        return next(Problem(404, "Internal Server Error"));
    }
};
