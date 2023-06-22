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
exports.deleteFacilityHandler = exports.updateFacilityHandler = exports.createFacilityHandler = exports.getFacilityHandler = exports.getAllFacilityHandler = void 0;
const facility_service_1 = require("./facility.service");
function getAllFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const facilities = yield (0, facility_service_1.getAllFacility)();
        return res.json(facilities);
    });
}
exports.getAllFacilityHandler = getAllFacilityHandler;
function getFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const facility = yield (0, facility_service_1.getFacilityById)(id);
        if (!facility) {
            return res.status(404).json({
                message: 'Facility not found',
            });
        }
        return res.status(200).json(facility);
    });
}
exports.getFacilityHandler = getFacilityHandler;
function createFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.name) {
            return res.status(400).json({
                error: "Name is missing",
            });
        }
        const facility = yield (0, facility_service_1.createFacility)(data);
        return res.status(201).json(facility);
    });
}
exports.createFacilityHandler = createFacilityHandler;
function updateFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const facility = yield (0, facility_service_1.updateFacility)(id, data);
        if (!facility) {
            return res.status(404).json({
                message: "Facility not Found",
            });
        }
        return res.status(202).json(facility);
    });
}
exports.updateFacilityHandler = updateFacilityHandler;
function deleteFacilityHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const facility = yield (0, facility_service_1.getFacilityById)(id);
        if (!facility) {
            return res.status(404).json({
                message: 'Facility not found',
            });
        }
        yield (0, facility_service_1.deleteFacility)(id);
        return res.json({ message: 'Facility deleted' });
    });
}
exports.deleteFacilityHandler = deleteFacilityHandler;
