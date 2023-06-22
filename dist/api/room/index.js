"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = require("./room.controller");
const router = (0, express_1.Router)();
// /api/rooms --> GET
router.get('/', room_controller_1.getAllRoomHandler);
// /api/rooms/:id --> GET
router.get('/:id', room_controller_1.getRoomHandler);
// /api/rooms --> POST
router.post('/', room_controller_1.createRoomHandler);
// /api/rooms/:id --> PATCH
router.patch('/:id', room_controller_1.updateRoomHandler);
// /api/rooms/:id --> DELETE
router.delete('/:id', room_controller_1.deleteRoomHandler);
exports.default = router;
