import express from "express";
import * as profileController from "../controllers/profileController";
import { upload } from "../middlewares/upload";

const routerProfile = express.Router();

routerProfile.post("/", upload.single("profile_pic"), profileController.create);
routerProfile.get("/:id", profileController.getProfile);
routerProfile.put("/:id", upload.single("profile_pic"), profileController.update);
routerProfile.delete("/:id", profileController.remove);

export default routerProfile;
// Compare this snippet from src/routes/index.ts:
