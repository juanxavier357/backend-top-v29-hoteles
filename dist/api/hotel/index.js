"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hotel_controller_1 = require("./hotel.controller");
const router = (0, express_1.Router)();
// /api/hotels --> GET
router.get('/', hotel_controller_1.getAllHotelHandler);
// /api/hotels/:id --> GET
router.get('/:id', hotel_controller_1.getHotelHandler);
// /api/hotels --> POST
router.post('/', hotel_controller_1.createHotelHandler);
// /api/hotels/:id --> PATCH
router.patch('/:id', hotel_controller_1.updateHotelHandler);
// /api/hotels/:id --> DELETE
router.delete('/:id', hotel_controller_1.deleteHotelHandler);
exports.default = router;
