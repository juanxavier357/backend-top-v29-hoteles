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
exports.deleteImage = exports.updateImage = exports.createImage = exports.getImageById = exports.getAllImage = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllImage() {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield prisma.images.findMany();
        return images;
    });
}
exports.getAllImage = getAllImage;
function getImageById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield prisma.images.findUnique({
            where: {
                id,
            },
        });
        return image;
    });
}
exports.getImageById = getImageById;
function createImage(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield prisma.images.create({
            data,
        });
        return image;
    });
}
exports.createImage = createImage;
function updateImage(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield prisma.images.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return image;
    });
}
exports.updateImage = updateImage;
function deleteImage(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield prisma.images.delete({
            where: {
                id,
            },
        });
        return image;
    });
}
exports.deleteImage = deleteImage;
