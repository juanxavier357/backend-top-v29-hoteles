import { Router } from 'express'

import {
  getAllRolesHandler,
  getRoleHandler,
  createRoleHandler,
  updateRoleHandler,
  deleteRoleHandler,
} from './role.controller'

const router = Router()

// /api/role --> GET
router.get('/', getAllRolesHandler)

// /api/role/:id --> GET
router.get('/:id', getRoleHandler)

// /api/role --> POST
router.post('/', createRoleHandler)

// /api/role/:id --> PATCH
router.patch('/:id', updateRoleHandler)

// /api/role/:id --> DELETE
router.delete('/:id', deleteRoleHandler)

export default router

