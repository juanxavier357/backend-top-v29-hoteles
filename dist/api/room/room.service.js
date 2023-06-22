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
exports.deleteRoom = exports.updateRoom = exports.createRoom = exports.getRoomById = exports.getAllRoom = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllRoom() {
    return __awaiter(this, void 0, void 0, function* () {
        const rooms = yield prisma.rooms.findMany();
        return rooms;
    });
}
exports.getAllRoom = getAllRoom;
function getRoomById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield prisma.rooms.findUnique({
            where: {
                id,
            },
        });
        return room;
    });
}
exports.getRoomById = getRoomById;
function createRoom(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield prisma.rooms.create({
            data,
        });
        return room;
    });
}
exports.createRoom = createRoom;
function updateRoom(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield prisma.rooms.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return room;
    });
}
exports.updateRoom = updateRoom;
function deleteRoom(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = yield prisma.rooms.delete({
            where: {
                id,
            },
        });
        return room;
    });
}
exports.deleteRoom = deleteRoom;
