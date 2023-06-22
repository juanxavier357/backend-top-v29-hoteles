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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = require("../../api/user/user.service");
const bcrypt_1 = require("../utils/bcrypt");
function loginHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, user_service_1.getUserByEmail)(email);
            if (!user) {
                return res.status(404).json({ message: "user not found" });
            }
            //compare
            const isMatch = yield (0, bcrypt_1.comparePassword)(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Incorret email or password" });
            }
            //jwt
            const payload = {
                id: user.id,
                email: user.email
            };
            const SECRET = "s3cr3t_c0d3_123";
            const token = jsonwebtoken_1.default.sign(payload, SECRET);
            const profile = {
                fullName: `${user.firstName} ${user.lastName}`,
                avatar: user.avatar,
                roles: user.roles.map(({ role }) => ({
                    id: role.id,
                    name: role.name
                }))
            };
            return res.json({ token, profile });
        }
        catch (error) { }
    });
}
exports.loginHandler = loginHandler;
