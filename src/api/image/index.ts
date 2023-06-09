import { Router } from 'express'

import {
    getAllImageHandler,
    getImageHandler,
    createImageHandler,
    updateImageHandler,
    deleteImageHandler,
} from './image.controller'

const router = Router()

// /api/images --> GET
router.get('/', getAllImageHandler)

// /api/images/:id --> GET
router.get('/:id', getImageHandler)

// /api/images --> POST
router.post('/', createImageHandler)

// /api/images/:id --> PATCH
router.patch('/:id', updateImageHandler)

// /api/images/:id --> DELETE
router.delete('/:id', deleteImageHandler)

export default router

