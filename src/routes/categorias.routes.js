import { Router } from "express";
import { obtenerCategorias,obtenerCategoria } from "../controllers/categorias.controller.js";

const router = Router();

// Ruta para obtener todos los categorias
router.get("/categorias", obtenerCategorias);

export default router;

// Ruta para obtenr una categoria por su ID
router.get("/categoria/:id_categorias", obtenerCategoria);
