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
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoleById = exports.getAllRoles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllRoles() {
    return __awaiter(this, void 0, void 0, function* () {
        const roles = yield prisma.roles.findMany();
        return roles;
    });
}
exports.getAllRoles = getAllRoles;
function getRoleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const role = yield prisma.roles.findUnique({
            where: {
                id,
            },
        });
        return role;
    });
}
exports.getRoleById = getRoleById;
function createRole(data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!data.name) {
            throw new Error("Name is required");
        }
        const role = yield prisma.roles.create({
            data
        });
        return role;
    });
}
exports.createRole = createRole;
function updateRole(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const role = yield prisma.roles.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return role;
    });
}
exports.updateRole = updateRole;
function deleteRole(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const role = yield prisma.roles.delete({
            where: {
                id,
            },
        });
        return role;
    });
}
exports.deleteRole = deleteRole;
