"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facility_controller_1 = require("./facility.controller");
const router = (0, express_1.Router)();
// /api/facilitys --> GET
router.get('/', facility_controller_1.getAllFacilityHandler);
// /api/facilitys/:id --> GET
router.get('/:id', facility_controller_1.getFacilityHandler);
// /api/facilitys --> POST
router.post('/', facility_controller_1.createFacilityHandler);
// /api/facilitys/:id --> PATCH
router.patch('/:id', facility_controller_1.updateFacilityHandler);
// /api/facilitys/:id --> DELETE
router.delete('/:id', facility_controller_1.deleteFacilityHandler);
exports.default = router;
