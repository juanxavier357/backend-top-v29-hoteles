"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("./role.controller");
const router = (0, express_1.Router)();
// /api/role --> GET
router.get('/', role_controller_1.getAllRolesHandler);
// /api/role/:id --> GET
router.get('/:id', role_controller_1.getRoleHandler);
// /api/role --> POST
router.post('/', role_controller_1.createRoleHandler);
// /api/role/:id --> PATCH
router.patch('/:id', role_controller_1.updateRoleHandler);
// /api/role/:id --> DELETE
router.delete('/:id', role_controller_1.deleteRoleHandler);
exports.default = router;
