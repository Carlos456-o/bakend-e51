
import { Router } from "express";
import { obtenerVentas, obtenerVenta } from "../controllers/ventas.controller.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/ventas", obtenerVentas);

export default router;

// Ruta para obtenr una venta por su ID
router.get("/venta/:id_venta", obtenerVenta);