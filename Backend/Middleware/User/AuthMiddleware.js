import jwt from 'jsonwebtoken';

const authenticateToken = (request, response, next) => {
    try {
        const token = request.cookies.Token;
        
    if (!token) {
        return response.status(401).json({ error: "Access denied" });
    };
 
    jwt.verify(token, process.env.SECRET, async (error, decodedToken) => {
        if (error) {
            return response.status(403).json({ error: "Invalid token" });
        }
        // Store the user's ID in the request
        request.userId = decodedToken.userId;
        // Token is valid, proceed to the next middleware/route
        next(); 
    });
    
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
};

export default authenticateToken;