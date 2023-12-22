import { Router } from "express";
import * as auth from "../Controllers/User/Authentication.js";
import * as info from "../Controllers/User/User.js";
import * as fitness from "../Controllers/User/Fitness.js";
import * as admin from "../Controllers/Admin/Authentication.js";
import * as trainer from "../Controllers/Admin/Workout.js";
import authenticateToken from "../Middleware/User/AuthMiddleware.js";
import adminAuthMiddleware from "../Middleware/Admin/AdminAuthMiddleware.js";

const router = Router();

// Gym Members
router.post("/login", auth.login);
router.post("/register", auth.register);
router.post("/logout", auth.logout);
router.get("/info", authenticateToken, info.getUserData);
router.post("/fitness", authenticateToken, fitness.addFitnessData);
router.get("/fitness-data", authenticateToken, fitness.getFitnessData);
 
// Gym Trainer Or Owner 
router.post("/registerAdmin", admin.registerAdmin);
router.post("/loginAdmin", admin.loginAdmin);
router.post("/logoutAdmin", admin.logoutAdmin);
router.get("/getAllUsers", adminAuthMiddleware, trainer.getAllUsers);

export default router;
