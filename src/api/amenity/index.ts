import { Router } from 'express'

import {
  getAllAmenitiesHandler,
  getAmenityHandler,
  createAmenityHandler,
  updateAmenityHandler,
  deleteAmenityHandler,
} from './amenity.controller'

const router = Router()

// /api/amenities --> GET
router.get('/', getAllAmenitiesHandler)

// /api/amenities/:id --> GET
router.get('/:id', getAmenityHandler)

// /api/amenities --> POST
router.post('/', createAmenityHandler)

// /api/amenities/:id --> PATCH
router.patch('/:id', updateAmenityHandler)

// /api/amenities/:id --> DELETE
router.delete('/:id', deleteAmenityHandler)

export default router

