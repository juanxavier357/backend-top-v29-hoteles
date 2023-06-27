import { Router } from 'express'

import {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  loginHandler,
} from './user.controller'
import { hasRole, isAuthenticated } from '../../auth/auth.controller'
const router = Router()

// /api/users --> GET
router.get('/', getAllUsersHandler)

// /api/users/:id --> GET
router.get('/:id', getUserHandler)

// /api/users --> POST
router.post('/', createUserHandler)

// /api/users/:id --> PATCH
router.patch('/:id', updateUserHandler)

// /api/users/:id --> DELETE
router.delete('/:id', hasRole(["ADMIN"]), deleteUserHandler)

// api/users/login --> LOGIN
router.post('login', loginHandler)

export default router

