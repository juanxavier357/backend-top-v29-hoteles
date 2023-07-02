//rutas
import { Router } from "express";
import { loginHandler, activateHandler } from "./local.controller";
const router = Router()

router.post("/login", loginHandler)
// Change
// reset
// logout
// activate account --> /auth/local/activate/:token
router.get('/activate/:token', activateHandler)

export default router;
