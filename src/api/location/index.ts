import { Router } from 'express'

import {
    getAllLocationHandler,
    getLocationHandler,
    createLocationHandler,
    updateLocationHandler,
    deleteLocationHandler,
} from './location.controller'

const router = Router()

// /api/locations --> GET
router.get('/', getAllLocationHandler)

// /api/locations/:id --> GET
router.get('/:id', getLocationHandler)

// /api/locations --> POST
router.post('/', createLocationHandler)

// /api/locations/:id --> PATCH
router.patch('/:id', updateLocationHandler)

// /api/locations/:id --> DELETE
router.delete('/:id', deleteLocationHandler)

export default router

