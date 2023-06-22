import { Router } from 'express'

import {
    getAllReservationHandler,
    getReservationHandler,
    createReservationHandler,
    updateReservationHandler,
    deleteReservationHandler,
} from './reservation.controller'

const router = Router()

// /api/reservations --> GET
router.get('/', getAllReservationHandler)

// /api/reservations/:id --> GET
router.get('/:id', getReservationHandler)

// /api/reservations --> POST
router.post('/', createReservationHandler)

// /api/reservations/:id --> PATCH
router.patch('/:id', updateReservationHandler)

// /api/reservations/:id --> DELETE
router.delete('/:id', deleteReservationHandler)

export default router
