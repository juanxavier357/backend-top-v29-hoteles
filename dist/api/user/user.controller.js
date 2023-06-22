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
exports.deleteUserHandler = exports.updateUserHandler = exports.createUserHandler = exports.getUserHandler = exports.getAllUsersHandler = void 0;
const user_service_1 = require("./user.service");
function getAllUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, user_service_1.getAllUsers)();
        return res.json(users);
    });
}
exports.getAllUsersHandler = getAllUsersHandler;
function getUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, user_service_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: 'user not found',
            });
        }
        return res.status(200).json(user);
    });
}
exports.getUserHandler = getUserHandler;
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield (0, user_service_1.createUser)(data);
            return res.status(201).json(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createUserHandler = createUserHandler;
function updateUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const user = yield (0, user_service_1.updateUser)(id, data);
        if (!user) {
            return res.status(404).json({
                message: "user not Found",
            });
        }
        return res.status(202).json(user);
    });
}
exports.updateUserHandler = updateUserHandler;
function deleteUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, user_service_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: 'user not found',
            });
        }
        //await deleteUser(id)
        return res.json(user);
    });
}
exports.deleteUserHandler = deleteUserHandler;
