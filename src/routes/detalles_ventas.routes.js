
import { Router } from "express";
import { obtenerDetallesVentas, obtenerDetalleVenta, registrarDetalleVenta, eliminarDetalleVenta, actualizarDetalleVenta } from "../controllers/detalles_ventas.controller.js";

const router = Router();

// Ruta para obtener todos los detalles de ventas
router.get("/detallesventas", obtenerDetallesVentas);

// Ruta para obtenr un detalle de venta por su ID
router.get("/detalleventa/:id_detalle_venta", obtenerDetalleVenta);

// Ruta para registrar un nuevo Detalle de Venta
router.post('/registrardetalleventa', registrarDetalleVenta);

//ruta para eliminar un detalle de venta por su ID
router.delete('/eliminardetalleventa/:id_detalle_venta', eliminarDetalleVenta);

// Ruta para actualizar un detalle de venta por su ID
router.put('/actualizardetalleventa/:id_detalle_venta', actualizarDetalleVenta);

export default router;
