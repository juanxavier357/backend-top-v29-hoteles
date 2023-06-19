//rutas
import { Router } from "express";
import { loginHandler } from "./local.controller";
const router = Router()
// login
router.post("/login", loginHandler)
// Change
// reset
//logout
//activate account

export default router;
