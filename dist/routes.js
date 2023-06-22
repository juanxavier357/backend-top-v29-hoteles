"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactInfo_1 = __importDefault(require("./api/contactInfo"));
const facility_1 = __importDefault(require("./api/facility"));
const hotel_1 = __importDefault(require("./api/hotel"));
const image_1 = __importDefault(require("./api/image"));
const location_1 = __importDefault(require("./api/location"));
const room_1 = __importDefault(require("./api/room"));
const user_1 = __importDefault(require("./api/user"));
const amenity_1 = __importDefault(require("./api/amenity"));
const local_1 = __importDefault(require("./auth/local"));
function routes(app) {
    // Aquí puedes agregar las demás rutas si las necesitas
    app.use('/api/contactInfo', contactInfo_1.default);
    app.use('/api/facility', facility_1.default);
    app.use('/api/hotel', hotel_1.default);
    app.use('/api/image', image_1.default);
    app.use('/api/location', location_1.default);
    app.use('/api/room', room_1.default);
    app.use('/api/user', user_1.default);
    app.use('/api/amenities', amenity_1.default);
    //Auth
    app.use("/auth/local", local_1.default);
}
exports.default = routes;
