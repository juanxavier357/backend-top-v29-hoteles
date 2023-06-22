import { Router } from 'express'

import {
  getAllAmenitiesHandler,
  getAmenityHandler,
  createAmenityHandler,
  updateAmenityHandler,
  deleteAmenityHandler,
} from './amenity.controller'

const router = Router()

// /api/amenitys --> GET
router.get('/', getAllAmenitiesHandler)

// /api/amenitys/:id --> GET
router.get('/:id', getAmenityHandler)

// /api/amenitys --> POST
router.post('/', createAmenityHandler)

// /api/amenitys/:id --> PATCH
router.patch('/:id', updateAmenityHandler)

// /api/amenitys/:id --> DELETE
router.delete('/:id', deleteAmenityHandler)

export default router

