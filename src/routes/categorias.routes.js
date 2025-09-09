import { Router } from "express";
import { obtenerCategorias,obtenerCategoria , registrarCategoria } from "../controllers/categorias.controller.js";

const router = Router();

// Ruta para obtener todos los categorias
router.get("/categorias", obtenerCategorias);



// Ruta para obtenr una categoria por su ID
router.get("/categoria/:id_categorias", obtenerCategoria);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);


export default router;