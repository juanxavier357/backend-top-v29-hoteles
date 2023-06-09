import { Router } from 'express'

import {
    getAllRoomHandler,
    getRoomHandler,
    createRoomHandler,
    updateRoomHandler,
    deleteRoomHandler,
} from './room.controller'

const router = Router()

// /api/rooms --> GET
router.get('/', getAllRoomHandler)

// /api/rooms/:id --> GET
router.get('/:id', getRoomHandler)

// /api/rooms --> POST
router.post('/', createRoomHandler)

// /api/rooms/:id --> PATCH
router.patch('/:id', updateRoomHandler)

// /api/rooms/:id --> DELETE
router.delete('/:id', deleteRoomHandler)

export default router

