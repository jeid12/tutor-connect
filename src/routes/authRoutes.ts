import { Router } from "express";
import { register, login ,allUsers} from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
//all users
authRoutes.get("/all",  allUsers);

export default authRoutes;
