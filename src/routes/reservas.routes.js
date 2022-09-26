import { Router } from "express";
import {
  createReserva,
  getReservas,
  updateReservas,
  deleteReserva,
  getReserva,
} from "../controllers/reserva.controller.js";

const router = Router();

// Routes
router.post("/", createReserva);
router.put("/:id", updateReservas);
router.delete("/:id", deleteReserva);
router.get("/", getReservas);
router.get("/:id", getReserva);

export default router;
