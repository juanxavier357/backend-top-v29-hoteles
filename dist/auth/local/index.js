"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//rutas
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const router = (0, express_1.Router)();
router.post("/login", local_controller_1.loginHandler);
// Change
// reset
// logout
// activate account
exports.default = router;
