
import { Router } from "express";
import { obtenerClientes, obtenerCliente, registrarCliente,eliminarCliente, actualizarCliente } from "../controllers/clientes.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/clientes", obtenerClientes);

// Ruta para obtener un cliente por su ID
router.get("/cliente/:id_cliente", obtenerCliente);

// Ruta para registrar un nuevo Cliente
router.post('/registrarcliente', registrarCliente);

// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

// Ruta para actualizar un cliente por su ID
router.put('/actualizarcliente/:id_cliente', actualizarCliente);

export default router;