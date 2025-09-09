
import { Router } from "express";
import { obtenerCompras, obtenerCompra } from "../controllers/compra.controller.js";

const router = Router();

// Ruta para obtener todos los compras
router.get("/compras", obtenerCompras);

export default router;

// Ruta para obtener una compra por su ID
router.get("/compra/:id_compra", obtenerCompra);