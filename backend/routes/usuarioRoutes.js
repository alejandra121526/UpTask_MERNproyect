import express from "express";
const router = express.Router();

import { registrar } from "../controllers/usuarioController.js"

//autenticacion, registro y confirmacion de usuarios
router.post('/', registrar); //creacion de usuarios

 
export default router;

