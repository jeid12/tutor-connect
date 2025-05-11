import express from "express";
import * as controller from "../controllers/subjectController";

const routerSubject = express.Router();

routerSubject.post("/", controller.create);
routerSubject.get("/", controller.getAll);
routerSubject.get("/:id", controller.getById);
routerSubject.put("/:id", controller.update);
routerSubject.delete("/:id", controller.remove);

export default routerSubject;
