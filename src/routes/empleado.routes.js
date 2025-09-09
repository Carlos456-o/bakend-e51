
import { Router } from "express";
import { obtenerEmpleados, obtenerEmpleado,registrarEmpleado } from "../controllers/empleado.controller.js";

const router = Router();

// Ruta para obtener todos los empleados
router.get("/empleado", obtenerEmpleados);

// Ruta para obtenr un empleado por su ID
router.get("/empleado/:id_empleado", obtenerEmpleado);

// Ruta para registrar un nuevo Empleado
router.post('/registrarempleado', registrarEmpleado);

export default router;