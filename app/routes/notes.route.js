import {Router} from "express";
import notesController from "../controllers/notes.controller.js"

const notesRouter = Router()

//Get many records
notesRouter.get("/", notesController.fetchmany);

//Get one record
notesRouter.get("/:id", notesController.fetchone);

//update one record
notesRouter.put("/:id", notesController.update);

export default notesRouter

  