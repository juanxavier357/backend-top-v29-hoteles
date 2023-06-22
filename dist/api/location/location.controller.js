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
exports.deleteLocationHandler = exports.updateLocationHandler = exports.createLocationHandler = exports.getLocationHandler = exports.getAllLocationHandler = void 0;
const location_service_1 = require("./location.service");
function getAllLocationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const locations = yield (0, location_service_1.getAllLocation)();
        return res.json(locations);
    });
}
exports.getAllLocationHandler = getAllLocationHandler;
function getLocationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const location = yield (0, location_service_1.getLocationById)(id);
        if (!location) {
            return res.status(404).json({
                message: 'Location not found',
            });
        }
        return res.status(200).json(location);
    });
}
exports.getLocationHandler = getLocationHandler;
function createLocationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.city || !data.address) {
            return res.status(400).json({
                error: "City or address is missing",
            });
        }
        const location = yield (0, location_service_1.createLocation)(data);
        return res.status(201).json(location);
    });
}
exports.createLocationHandler = createLocationHandler;
function updateLocationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const location = yield (0, location_service_1.updateLocation)(id, data);
        if (!location) {
            return res.status(404).json({
                message: "Location not Found",
            });
        }
        return res.status(202).json(location);
    });
}
exports.updateLocationHandler = updateLocationHandler;
function deleteLocationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const location = yield (0, location_service_1.getLocationById)(id);
        if (!location) {
            return res.status(404).json({
                message: 'Location not found',
            });
        }
        yield (0, location_service_1.deleteLocation)(id);
        return res.json({ message: 'Location deleted' });
    });
}
exports.deleteLocationHandler = deleteLocationHandler;
