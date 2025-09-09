
import { Router } from "express";
import { obtenerDetallesCompras,obtenerDetalleCompra, registrarDetalleCompra } from "../controllers/Detalles_compras.controller.js";

const router = Router();

// Ruta para obtener todos los detalles de ventas
router.get("/detallescompras", obtenerDetallesCompras);

// Ruta para obtenr un detalle de compra por su ID
router.get("/detallecompra/:id_detalle_compra", obtenerDetalleCompra);

// Ruta para registrar un nuevo Detalle de Compra
router.post('/registrardetallecompra', registrarDetalleCompra);

export default router;
