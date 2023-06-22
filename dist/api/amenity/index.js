"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const amenity_controller_1 = require("./amenity.controller");
const router = (0, express_1.Router)();
// /api/amenities --> GET
router.get('/', amenity_controller_1.getAllAmenitiesHandler);
// /api/amenities/:id --> GET
router.get('/:id', amenity_controller_1.getAmenityHandler);
// /api/amenities --> POST
router.post('/', amenity_controller_1.createAmenityHandler);
// /api/amenities/:id --> PATCH
router.patch('/:id', amenity_controller_1.updateAmenityHandler);
// /api/amenities/:id --> DELETE
router.delete('/:id', amenity_controller_1.deleteAmenityHandler);
exports.default = router;
