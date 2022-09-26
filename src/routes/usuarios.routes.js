import { Router } from "express";
import {
  getUsuarios,
  createUsuario,
  updateUsuario,
  getUsuario,
  deleteUsuario,
  getUsuarioReservas,
} from "../controllers/usuario.controller.js";

const router = Router();

// Routes
router.post("/", createUsuario);
router.get("/", getUsuarios);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.get("/:id", getUsuario);

router.get("/:id/tasks", getUsuarioReservas);

export default router;
