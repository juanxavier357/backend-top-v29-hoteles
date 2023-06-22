"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_controller_1 = require("./image.controller");
const router = (0, express_1.Router)();
// /api/images --> GET
router.get('/', image_controller_1.getAllImageHandler);
// /api/images/:id --> GET
router.get('/:id', image_controller_1.getImageHandler);
// /api/images --> POST
router.post('/', image_controller_1.createImageHandler);
// /api/images/:id --> PATCH
router.patch('/:id', image_controller_1.updateImageHandler);
// /api/images/:id --> DELETE
router.delete('/:id', image_controller_1.deleteImageHandler);
exports.default = router;
