"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_controller_1 = require("./location.controller");
const router = (0, express_1.Router)();
// /api/locations --> GET
router.get('/', location_controller_1.getAllLocationHandler);
// /api/locations/:id --> GET
router.get('/:id', location_controller_1.getLocationHandler);
// /api/locations --> POST
router.post('/', location_controller_1.createLocationHandler);
// /api/locations/:id --> PATCH
router.patch('/:id', location_controller_1.updateLocationHandler);
// /api/locations/:id --> DELETE
router.delete('/:id', location_controller_1.deleteLocationHandler);
exports.default = router;
