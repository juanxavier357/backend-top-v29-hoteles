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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserByEmail = exports.getUserById = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("../../auth/utils/bcrypt");
const prisma = new client_1.PrismaClient();
// Query with prisma client
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.users.findMany();
        return users;
    });
}
exports.getAllUsers = getAllUsers;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.getUserById = getUserById;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const foundUser = yield prisma.users.findUnique({
            where: { email },
            include: {
                roles: {
                    select: {
                        role: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        return foundUser || null;
    });
}
exports.getUserByEmail = getUserByEmail;
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!input.password) {
            throw new Error("Password is required");
        }
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(input.password);
        const data = Object.assign(Object.assign({}, input), { password: hashedPassword });
        const user = yield prisma.users.create({
            data
        });
        return user;
    });
}
exports.createUser = createUser;
function updateUser(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.update({
            where: {
                id,
            },
            data: Object.assign({}, data)
        });
        return user;
    });
}
exports.updateUser = updateUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.delete({
            where: {
                id,
            },
        });
        return user;
    });
}
exports.deleteUser = deleteUser;
