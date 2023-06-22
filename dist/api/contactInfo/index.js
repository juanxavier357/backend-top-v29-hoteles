"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactInfo_controller_1 = require("./contactInfo.controller");
const router = (0, express_1.Router)();
// /api/contactsInfo --> GET
router.get('/', contactInfo_controller_1.getAllContactInfoHandler);
// /api/contactsInfo/:id --> GET
router.get('/:id', contactInfo_controller_1.getContactInfoHandler);
// /api/contactsInfo --> POST
router.post('/', contactInfo_controller_1.createContactInfoHandler);
// /api/contactsInfo/:id --> PATCH
router.patch('/:id', contactInfo_controller_1.updateContactInfoHandler);
// /api/contactsInfo/:id --> DELETE
router.delete('/:id', contactInfo_controller_1.deleteContactInfoHandler);
exports.default = router;
