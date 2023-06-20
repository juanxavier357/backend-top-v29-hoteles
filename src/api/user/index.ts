import { Router } from 'express'

import {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller'
import { isAuthenticated } from '../../auth/auth.service'
const router = Router()

// /api/users --> GET
router.get('/', isAuthenticated, getAllUsersHandler)

// /api/users/:id --> GET
router.get('/:id', getUserHandler)

// /api/users --> POST
router.post('/', createUserHandler)

// /api/users/:id --> PATCH
router.patch('/:id', updateUserHandler)

// /api/users/:id --> DELETE
router.delete('/:id', isAuthenticated, deleteUserHandler)

export default router

