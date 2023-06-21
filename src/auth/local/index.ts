//rutas
import { Router } from "express";
import { loginHandler } from "./local.controller";
const router = Router()

router.post("/login", loginHandler)
router.post("/login", loginHandler)
// Change
// reset
//logout
//activate account

export default router;
