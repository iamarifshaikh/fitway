import fitness from "../../Schema/User/fitness.js";
import { Problem, Success } from "../../Custom/Message.js";

/**
 * @route {POST} /api/fitness
 * @description Create a new fitness data
 * @access private
 */

export const addFitnessData = async (request, response, next) => {
  try {
    const userId = await request.userId;

    if (!userId) {
      // Handle the case where userId is not available, e.g., user is not authenticated
      return next(Problem(401, "Unauthorized"));
    }

    const fitnessData = new fitness({
      user: userId, // Link the fitness data to the authenticated user
      ...request.body, // Spread the properties from request.body
    });

    const successResponse = new Success(
      200,
      "Fitness Data Successfully Created"
    );
    response.status(successResponse.status).json(successResponse.message);

    await fitnessData.save(); 
  } catch (error) {
    console.error(error);
    return next(Problem(500, "Internal server error"));
  }
};

/**
 * @route {GET} /api/fitness-data
 * @description Get the fitness data
 * @access protected
 */

export const getFitnessData = async (request, response, next) => {
  try {
    // Extract the user ID from the authenticated request

    const userId = request.userId;

    // Query the database to find fitness data associated with the user's ID
    const fitnessData = await fitness.find({ user: userId });

    response.status(200).json(fitnessData);
  } catch (error) {
    console.error(error);
    return next(Problem(500, "Internal server error"));
  }
};
