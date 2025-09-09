
import { Router } from "express";
import { obtenerUsuarios, obtenerUsuario } from "../controllers/usuario.controller.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/usuarios", obtenerUsuarios);

export default router;

// Ruta para obtenr un usuario por su ID
router.get("/usuario/:id_usuario", obtenerUsuario);