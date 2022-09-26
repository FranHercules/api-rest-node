import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Import routes
import usuarioRoutes from "./routes/usuarios.routes.js";
import reservaRoutes from "./routes/reservas.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/reservas", reservaRoutes);

export default app;
