import express from "express";
import * as controller from "../controllers/studentController";

const routerStudent = express.Router();

routerStudent.post("/", controller.create);
routerStudent.get("/", controller.getAll);
routerStudent.get("/:id", controller.getById);
routerStudent.put("/:id", controller.update);
routerStudent.delete("/:id", controller.remove);

export default routerStudent;
