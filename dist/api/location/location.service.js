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
exports.deleteLocation = exports.updateLocation = exports.createLocation = exports.getLocationById = exports.getAllLocation = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllLocation() {
    return __awaiter(this, void 0, void 0, function* () {
        const locations = yield prisma.locations.findMany();
        return locations;
    });
}
exports.getAllLocation = getAllLocation;
function getLocationById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield prisma.locations.findUnique({
            where: {
                id,
            },
        });
        return location;
    });
}
exports.getLocationById = getLocationById;
function createLocation(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield prisma.locations.create({
            data,
        });
        return location;
    });
}
exports.createLocation = createLocation;
function updateLocation(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield prisma.locations.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return location;
    });
}
exports.updateLocation = updateLocation;
function deleteLocation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield prisma.locations.delete({
            where: {
                id,
            },
        });
        return location;
    });
}
exports.deleteLocation = deleteLocation;
