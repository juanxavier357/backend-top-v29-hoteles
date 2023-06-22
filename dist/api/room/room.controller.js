"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomHandler = exports.updateRoomHandler = exports.createRoomHandler = exports.getRoomHandler = exports.getAllRoomHandler = void 0;
const room_service_1 = require("./room.service");
function getAllRoomHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const rooms = yield (0, room_service_1.getAllRoom)();
        return res.json(rooms);
    });
}
exports.getAllRoomHandler = getAllRoomHandler;
function getRoomHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const room = yield (0, room_service_1.getRoomById)(id);
        if (!room) {
            return res.status(404).json({
                message: 'Room not found',
            });
        }
        return res.status(200).json(room);
    });
}
exports.getRoomHandler = getRoomHandler;
function createRoomHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.number_beds || !data.price_night) {
            return res.status(400).json({
                error: "Number beds or price night is missing",
            });
        }
        const room = yield (0, room_service_1.createRoom)(data);
        return res.status(201).json(room);
    });
}
exports.createRoomHandler = createRoomHandler;
function updateRoomHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const room = yield (0, room_service_1.updateRoom)(id, data);
        if (!room) {
            return res.status(404).json({
                message: "Room not Found",
            });
        }
        return res.status(202).json(room);
    });
}
exports.updateRoomHandler = updateRoomHandler;
function deleteRoomHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const room = yield (0, room_service_1.getRoomById)(id);
        if (!room) {
            return res.status(404).json({
                message: 'Room not found',
            });
        }
        yield (0, room_service_1.deleteRoom)(id);
        return res.json({ message: 'Room deleted' });
    });
}
exports.deleteRoomHandler = deleteRoomHandler;
