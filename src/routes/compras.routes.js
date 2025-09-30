
import { Router } from "express";
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra, actualizarCompra } from "../controllers/compra.controller.js";

const router = Router();

// Ruta para obtener todos los compras
router.get("/compras", obtenerCompras);

// Ruta para obtener una compra por su ID
router.get("/compra/:id_compra", obtenerCompra);

// Ruta para registrar una nueva compra
router.post('/registrarcompra', registrarCompra);

// Ruta para eliminar una compra por su ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

// Ruta para actualizar una compra por su ID
router.put('/actualizarcompra/:id_compra', actualizarCompra);

export default router;