import User from '../../Schema/User/signup.js';
import {Success,Problem} from '../../Custom/Message.js';

/**
 * @route {GET} /api/info
 * @description get the user from the database
 * @access protected
 */

export const getUserData = async (request, response, next) =>{
    try {
        const userId = request.userId;
        const user = await User.findById(userId);
         
        if(!user) return response.status(404).json({message:"User not found"});
        
        const userData ={
            _id: user._id,
            name: user.name,
            email: user.email,
        }
        const successResponse = new Success(200, "User data retrieved successfully");
        response.status(successResponse.status).json(userData);
        
    } catch (error) {
        console.error(error);
        return next(Problem(500, "Internal server error"));
    };
};