import { Router } from 'express'

import {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller'
import { hasRole, isAuthenticated } from '../../auth/auth.controller'
const router = Router()

// /api/users --> GET
router.get('/', hasRole(["USER"]), getAllUsersHandler)

// /api/users/:id --> GET
router.get('/:id', getUserHandler)

// /api/users --> POST
router.post('/', createUserHandler)

// /api/users/:id --> PATCH
router.patch('/:id', updateUserHandler)

// /api/users/:id --> DELETE
router.delete('/:id', deleteUserHandler)

export default router

