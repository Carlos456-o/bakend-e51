
import { Router } from "express";
import { obtenerEmpleados, obtenerEmpleado } from "../controllers/empleado.controller.js";

const router = Router();

// Ruta para obtener todos los empleados
router.get("/empleado", obtenerEmpleados);

export default router;

// Ruta para obtenr un empleado por su ID
router.get("/empleado/:id_empleado", obtenerEmpleado);