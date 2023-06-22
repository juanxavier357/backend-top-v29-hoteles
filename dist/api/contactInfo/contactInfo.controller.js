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
exports.deleteContactInfoHandler = exports.updateContactInfoHandler = exports.createContactInfoHandler = exports.getContactInfoHandler = exports.getAllContactInfoHandler = void 0;
const contactInfo_service_1 = require("./contactInfo.service");
function getAllContactInfoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactsInfo = yield (0, contactInfo_service_1.getAllContactInfo)();
        return res.json(contactsInfo);
    });
}
exports.getAllContactInfoHandler = getAllContactInfoHandler;
function getContactInfoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const contactInfo = yield (0, contactInfo_service_1.getContactInfoById)(id);
        if (!contactInfo) {
            return res.status(404).json({
                message: 'ContactInfo not found',
            });
        }
        return res.status(200).json(contactInfo);
    });
}
exports.getContactInfoHandler = getContactInfoHandler;
function createContactInfoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        if (!data.name || !data.email || !data.phone) {
            return res.status(400).json({
                error: "Name, email or phone is missing",
            });
        }
        const contactInfo = yield (0, contactInfo_service_1.createContactInfo)(data);
        return res.status(201).json(contactInfo);
    });
}
exports.createContactInfoHandler = createContactInfoHandler;
function updateContactInfoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const contactInfo = yield (0, contactInfo_service_1.updateContactInfo)(id, data);
        if (!contactInfo) {
            return res.status(404).json({
                message: "ContactInfo not Found",
            });
        }
        return res.status(202).json(contactInfo);
    });
}
exports.updateContactInfoHandler = updateContactInfoHandler;
function deleteContactInfoHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const contactInfo = yield (0, contactInfo_service_1.getContactInfoById)(id);
        if (!contactInfo) {
            return res.status(404).json({
                message: 'ContactInfo not found',
            });
        }
        yield (0, contactInfo_service_1.deleteContactInfo)(id);
        return res.json({ message: 'ContactInfo deleted' });
    });
}
exports.deleteContactInfoHandler = deleteContactInfoHandler;
