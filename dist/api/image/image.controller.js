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
exports.deleteImageHandler = exports.updateImageHandler = exports.createImageHandler = exports.getImageHandler = exports.getAllImageHandler = void 0;
const image_service_1 = require("./image.service");
function getAllImageHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield (0, image_service_1.getAllImage)();
        return res.json(images);
    });
}
exports.getAllImageHandler = getAllImageHandler;
function getImageHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const image = yield (0, image_service_1.getImageById)(id);
        if (!image) {
            return res.status(404).json({
                message: 'Image not found',
            });
        }
        return res.status(200).json(image);
    });
}
exports.getImageHandler = getImageHandler;
function createImageHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.url) {
            return res.status(400).json({
                error: "Url is missing",
            });
        }
        const image = yield (0, image_service_1.createImage)(data);
        return res.status(201).json(image);
    });
}
exports.createImageHandler = createImageHandler;
function updateImageHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const image = yield (0, image_service_1.updateImage)(id, data);
        if (!image) {
            return res.status(404).json({
                message: "Image not Found",
            });
        }
        return res.status(202).json(image);
    });
}
exports.updateImageHandler = updateImageHandler;
function deleteImageHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const image = yield (0, image_service_1.getImageById)(id);
        if (!image) {
            return res.status(404).json({
                message: 'Image not found',
            });
        }
        yield (0, image_service_1.deleteImage)(id);
        return res.json({ message: 'Image deleted' });
    });
}
exports.deleteImageHandler = deleteImageHandler;
