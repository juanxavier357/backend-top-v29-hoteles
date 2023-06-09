import { Router } from 'express'

import {
    getAllHotelHandler,
    getHotelHandler,
    createHotelHandler,
    updateHotelHandler,
    deleteHotelHandler,
} from './hotel.controller'

const router = Router()

// /api/hotels --> GET
router.get('/', getAllHotelHandler)

// /api/hotels/:id --> GET
router.get('/:id', getHotelHandler)

// /api/hotels --> POST
router.post('/', createHotelHandler)

// /api/hotels/:id --> PATCH
router.patch('/:id', updateHotelHandler)

// /api/hotels/:id --> DELETE
router.delete('/:id', deleteHotelHandler)

export default router

