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
exports.deleteContactInfo = exports.updateContactInfo = exports.createContactInfo = exports.getContactInfoById = exports.getAllContactInfo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllContactInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const contactsInfo = yield prisma.contactsInfo.findMany();
        return contactsInfo;
    });
}
exports.getAllContactInfo = getAllContactInfo;
function getContactInfoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactInfo = yield prisma.contactsInfo.findUnique({
            where: {
                id,
            },
        });
        return contactInfo;
    });
}
exports.getContactInfoById = getContactInfoById;
function createContactInfo(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactInfo = yield prisma.contactsInfo.create({
            data,
        });
        return contactInfo;
    });
}
exports.createContactInfo = createContactInfo;
function updateContactInfo(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactInfo = yield prisma.contactsInfo.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return contactInfo;
    });
}
exports.updateContactInfo = updateContactInfo;
function deleteContactInfo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactInfo = yield prisma.contactsInfo.delete({
            where: {
                id,
            },
        });
        return contactInfo;
    });
}
exports.deleteContactInfo = deleteContactInfo;
