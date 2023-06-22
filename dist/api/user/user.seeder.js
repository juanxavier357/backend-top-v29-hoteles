"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userByRoleSeeder = exports.userSeeder = void 0;
const bcrypt_1 = require("../../auth/utils/bcrypt");
const role_seeder_1 = require("../role/role.seeder");
exports.userSeeder = [
    {
        id: 'Hotel_User_1',
        email: 'juancabello@gmail.com',
        firstName: 'Juan',
        lastName: 'Cabello',
        password: (0, bcrypt_1.hashPasswordSync)('1357'),
        avatar: 'https://picsum.photos/200',
        isActive: true,
    },
    {
        id: 'Hotel_User_2',
        email: 'michaelgonzales@gmail.com',
        firstName: 'Michael',
        lastName: 'Gonzales',
        password: (0, bcrypt_1.hashPasswordSync)('2468'),
        avatar: 'https://picsum.photos/200',
        isActive: true,
    },
    {
        id: 'Hotel_User_3',
        email: 'xaviersalirrosas@gmail.com',
        firstName: 'Xavier',
        lastName: 'Salirrosas',
        password: (0, bcrypt_1.hashPasswordSync)('3579'),
        avatar: 'https://picsum.photos/200',
        isActive: false,
    },
];
exports.userByRoleSeeder = [
    // user 1 --> Juan
    {
        userId: exports.userSeeder[0].id,
        roleId: role_seeder_1.roleSeeder[0].id,
    },
    {
        userId: exports.userSeeder[0].id,
        roleId: role_seeder_1.roleSeeder[1].id,
    },
    // user 2 --> Michael
    {
        userId: exports.userSeeder[1].id,
        roleId: role_seeder_1.roleSeeder[0].id,
    },
    {
        userId: exports.userSeeder[1].id,
        roleId: role_seeder_1.roleSeeder[1].id,
    },
    // user 3 --> Xavier
    {
        userId: exports.userSeeder[2].id,
        roleId: role_seeder_1.roleSeeder[1].id,
    },
];
