import { Success, Problem } from "../../Custom/Message.js";
import jwt from "jsonwebtoken";

const adminAuthMiddleware = async (request, response, next) => {
    try {
        const token = await request.cookies.Token;
        
        if (!token) {
            console.log("tokan is "+token);
            return next(Problem(401, "Unauthorized. Admin token missing."));
        }

        jwt.verify(token, process.env.SECRET, async (error, decodedToken) => {
        if (error) {
            return response.status(403).json({ error: "Invalid token" });
        }
        // Attach the admin object to the request for further use in route handlers
        request.adminId = decodedToken.adminId;

        // Continue to the next middleware or route handler
        next();
    });
    } catch (error) {
        console.error(error);
        return next(Problem(500, "Internal server error"));
    }
};

export default adminAuthMiddleware;