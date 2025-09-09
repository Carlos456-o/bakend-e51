
import { Router } from "express";
import { obtenerProducto, obtenerProductos } from "../controllers/producto.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get("/producto", obtenerProducto);

export default router;

// Ruta para obtenr un producto por su ID
router.get("/producto/:id_producto", obtenerProductos);