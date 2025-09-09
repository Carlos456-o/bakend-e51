
import { Router } from "express";
import { obtenerDetallesCompras,obtenerDetalleCompra } from "../controllers/Detalles_compras.controller.js";

const router = Router();

// Ruta para obtener todos los detalles de ventas
router.get("/detallescompras", obtenerDetallesCompras);

export default router;

// Ruta para obtenr un detalle de compra por su ID
router.get("/detallecompra/:id_detalle_compra", obtenerDetalleCompra);
