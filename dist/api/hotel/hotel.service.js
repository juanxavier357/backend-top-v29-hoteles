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
exports.deleteHotel = exports.updateHotel = exports.createHotel = exports.getHotelById = exports.getAllHotel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllHotel() {
    return __awaiter(this, void 0, void 0, function* () {
        const hotels = yield prisma.hotels.findMany();
        return hotels;
    });
}
exports.getAllHotel = getAllHotel;
function getHotelById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const hotel = yield prisma.hotels.findUnique({
            where: {
                id,
            },
        });
        return hotel;
    });
}
exports.getHotelById = getHotelById;
function createHotel(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const hotel = yield prisma.hotels.create({
            data,
        });
        return hotel;
    });
}
exports.createHotel = createHotel;
function updateHotel(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const hotel = yield prisma.hotels.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return hotel;
    });
}
exports.updateHotel = updateHotel;
function deleteHotel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const hotel = yield prisma.hotels.delete({
            where: {
                id,
            },
        });
        return hotel;
    });
}
exports.deleteHotel = deleteHotel;
