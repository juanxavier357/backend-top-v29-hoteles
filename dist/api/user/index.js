"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_service_1 = require("../../auth/auth.service");
const router = (0, express_1.Router)();
// /api/users --> GET
router.get('/', auth_service_1.isAuthenticated, user_controller_1.getAllUsersHandler);
// /api/users/:id --> GET
router.get('/:id', user_controller_1.getUserHandler);
// /api/users --> POST
router.post('/', user_controller_1.createUserHandler);
// /api/users/:id --> PATCH
router.patch('/:id', user_controller_1.updateUserHandler);
// /api/users/:id --> DELETE
router.delete('/:id', auth_service_1.isAuthenticated, user_controller_1.deleteUserHandler);
exports.default = router;
