
import { Router } from "express";
import { obtenerProductos, obtenerProducto,registrarProducto, eliminarProducto, actualizarProductosPatch } from "../controllers/producto.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get("/productos", obtenerProductos);

// Ruta para obtenr un producto por su ID
router.get("/producto/:id_producto", obtenerProducto);

// Ruta para registrar un nuevo Producto
router.post('/registrarproducto', registrarProducto);

//ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);

// Ruta para actualizar un producto por su ID
router.put('/actualizarproducto/:id_producto', actualizarProductosPatch);

export default router;