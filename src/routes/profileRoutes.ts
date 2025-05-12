import express from "express";
import * as profileController from "../controllers/profileController";
import { upload } from "../middlewares/upload";
import { auth } from "../middlewares/authMiddleware";                                               

const routerProfile = express.Router();

routerProfile.post("/", auth,upload.single("profile_pic"), profileController.create);
routerProfile.get("/:id", auth,profileController.getProfile);
routerProfile.put("/:id", auth,upload.single("profile_pic"), profileController.update);
routerProfile.delete("/:id", auth,profileController.remove);
//get profile by user id
routerProfile.get("/user/:userId", auth,profileController.getProfileByUserId);

export default routerProfile;
// Compare this snippet from src/routes/index.ts:
