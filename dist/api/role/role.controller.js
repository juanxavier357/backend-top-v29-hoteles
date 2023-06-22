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
exports.deleteRoleHandler = exports.updateRoleHandler = exports.createRoleHandler = exports.getRoleHandler = exports.getAllRolesHandler = void 0;
const role_service_1 = require("./role.service");
function getAllRolesHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const roles = yield (0, role_service_1.getAllRoles)();
        return res.json(roles);
    });
}
exports.getAllRolesHandler = getAllRolesHandler;
function getRoleHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const role = yield (0, role_service_1.getRoleById)(id);
        if (!role) {
            return res.status(404).json({
                message: 'role not found',
            });
        }
        return res.status(200).json(role);
    });
}
exports.getRoleHandler = getRoleHandler;
function createRoleHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const role = yield (0, role_service_1.createRole)(data);
            return res.status(201).json(role);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createRoleHandler = createRoleHandler;
function updateRoleHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        const role = yield (0, role_service_1.updateRole)(id, data);
        if (!role) {
            return res.status(404).json({
                message: "role not Found",
            });
        }
        return res.status(202).json(role);
    });
}
exports.updateRoleHandler = updateRoleHandler;
function deleteRoleHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const role = yield (0, role_service_1.getRoleById)(id);
        if (!role) {
            return res.status(404).json({
                message: 'role not found',
            });
        }
        yield (0, role_service_1.deleteRole)(id);
        return res.json({ message: 'role deleted' });
    });
}
exports.deleteRoleHandler = deleteRoleHandler;
