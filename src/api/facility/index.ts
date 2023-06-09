import { Router } from 'express'

import {
    getAllFacilityHandler,
    getFacilityHandler,
    createFacilityHandler,
    updateFacilityHandler,
    deleteFacilityHandler,
} from './facility.controller'

const router = Router()

// /api/facilitys --> GET
router.get('/', getAllFacilityHandler)

// /api/facilitys/:id --> GET
router.get('/:id', getFacilityHandler)

// /api/facilitys --> POST
router.post('/', createFacilityHandler)

// /api/facilitys/:id --> PATCH
router.patch('/:id', updateFacilityHandler)

// /api/facilitys/:id --> DELETE
router.delete('/:id', deleteFacilityHandler)

export default router

