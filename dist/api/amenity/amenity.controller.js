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
exports.deleteAmenityHandler = exports.updateAmenityHandler = exports.createAmenityHandler = exports.getAmenityHandler = exports.getAllAmenitiesHandler = void 0;
const amenity_service_1 = require("./amenity.service");
function getAllAmenitiesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const amenities = yield (0, amenity_service_1.getAllAmenities)();
        return res.json(amenities);
    });
}
exports.getAllAmenitiesHandler = getAllAmenitiesHandler;
function getAmenityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const amenity = yield (0, amenity_service_1.getAmenityById)(id);
        if (!amenity) {
            return res.status(404).json({
                message: 'amenity not found',
            });
        }
        return res.status(200).json(amenity);
    });
}
exports.getAmenityHandler = getAmenityHandler;
function createAmenityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.name || !data.roomsId) {
            return res.status(400).json({
                error: "name or roomId is missing",
            });
        }
        const amenity = yield (0, amenity_service_1.createAmenity)(data);
        return res.status(201).json(amenity);
    });
}
exports.createAmenityHandler = createAmenityHandler;
function updateAmenityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const amenity = yield (0, amenity_service_1.updateAmenity)(id, data);
        if (!amenity) {
            return res.status(404).json({
                message: "amenity not Found",
            });
        }
        return res.status(202).json(amenity);
    });
}
exports.updateAmenityHandler = updateAmenityHandler;
function deleteAmenityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const amenity = yield (0, amenity_service_1.getAmenityById)(id);
        if (!amenity) {
            return res.status(404).json({
                message: 'amenity not found',
            });
        }
        yield (0, amenity_service_1.deleteAmenity)(id);
        return res.json({ message: 'amenity deleted' });
    });
}
exports.deleteAmenityHandler = deleteAmenityHandler;
