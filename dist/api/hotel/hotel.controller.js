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
exports.deleteHotelHandler = exports.updateHotelHandler = exports.createHotelHandler = exports.getHotelHandler = exports.getAllHotelHandler = void 0;
const hotel_service_1 = require("./hotel.service");
function getAllHotelHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hotels = yield (0, hotel_service_1.getAllHotel)();
        return res.json(hotels);
    });
}
exports.getAllHotelHandler = getAllHotelHandler;
function getHotelHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const hotel = yield (0, hotel_service_1.getHotelById)(id);
        if (!hotel) {
            return res.status(404).json({
                message: 'Hotel not found',
            });
        }
        return res.status(200).json(hotel);
    });
}
exports.getHotelHandler = getHotelHandler;
function createHotelHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.name || !data.about) {
            return res.status(400).json({
                error: "Name or about is missing",
            });
        }
        const hotels = yield (0, hotel_service_1.getAllHotel)();
        const existingHotel = hotels.find((element) => element.hotel === data.hotel);
        if (existingHotel) {
            return res.status(400).json({
                error: "Title must be unique",
            });
        }
        const hotel = yield (0, hotel_service_1.createHotel)(data);
        return res.status(201).json(hotel);
    });
}
exports.createHotelHandler = createHotelHandler;
function updateHotelHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const hotel = yield (0, hotel_service_1.updateHotel)(id, data);
        if (!hotel) {
            return res.status(404).json({
                message: "Hotel not Found",
            });
        }
        return res.status(202).json(hotel);
    });
}
exports.updateHotelHandler = updateHotelHandler;
function deleteHotelHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const hotel = yield (0, hotel_service_1.getHotelById)(id);
        if (!hotel) {
            return res.status(404).json({
                message: 'Hotel not found',
            });
        }
        yield (0, hotel_service_1.deleteHotel)(id);
        return res.json({ message: 'Hotel deleted' });
    });
}
exports.deleteHotelHandler = deleteHotelHandler;
