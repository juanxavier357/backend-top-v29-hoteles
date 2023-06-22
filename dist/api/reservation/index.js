"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservation_controller_1 = require("./reservation.controller");
const router = (0, express_1.Router)();
// /api/reservations --> GET
router.get('/', reservation_controller_1.getAllReservationHandler);
// /api/reservations/:id --> GET
router.get('/:id', reservation_controller_1.getReservationHandler);
// /api/reservations --> POST
router.post('/', reservation_controller_1.createReservationHandler);
// /api/reservations/:id --> PATCH
router.patch('/:id', reservation_controller_1.updateReservationHandler);
// /api/reservations/:id --> DELETE
router.delete('/:id', reservation_controller_1.deleteReservationHandler);
exports.default = router;
