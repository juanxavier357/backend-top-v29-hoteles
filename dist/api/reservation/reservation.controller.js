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
exports.deleteReservationHandler = exports.updateReservationHandler = exports.createReservationHandler = exports.getReservationHandler = exports.getAllReservationHandler = void 0;
const reservation_service_1 = require("./reservation.service");
function getAllReservationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const reservations = yield (0, reservation_service_1.getAllReservation)();
        return res.json(reservations);
    });
}
exports.getAllReservationHandler = getAllReservationHandler;
function getReservationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const reservation = yield (0, reservation_service_1.getReservationById)(id);
        if (!reservation) {
            return res.status(404).json({
                message: 'Reservation not found',
            });
        }
        return res.status(200).json(reservation);
    });
}
exports.getReservationHandler = getReservationHandler;
function createReservationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.startDate || !data.endDate || !data.paymentStatus) {
            return res.status(400).json({
                error: "Start date, end date or payment status address is missing",
            });
        }
        const reservation = yield (0, reservation_service_1.createReservation)(data);
        return res.status(201).json(reservation);
    });
}
exports.createReservationHandler = createReservationHandler;
function updateReservationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const reservation = yield (0, reservation_service_1.updateReservation)(id, data);
        if (!reservation) {
            return res.status(404).json({
                message: "Reservation not Found",
            });
        }
        return res.status(202).json(reservation);
    });
}
exports.updateReservationHandler = updateReservationHandler;
function deleteReservationHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const reservation = yield (0, reservation_service_1.getReservationById)(id);
        if (!reservation) {
            return res.status(404).json({
                message: 'Reservation not found',
            });
        }
        yield (0, reservation_service_1.deleteReservation)(id);
        return res.json({ message: 'Reservation deleted' });
    });
}
exports.deleteReservationHandler = deleteReservationHandler;
