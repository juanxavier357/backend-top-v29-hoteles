import { Router } from 'express'

import {
    getAllContactInfoHandler,
    getContactInfoHandler,
    createContactInfoHandler,
    updateContactInfoHandler,
    deleteContactInfoHandler,
} from './contactInfo.controller'

const router = Router()

// /api/contactsInfo --> GET
router.get('/', getAllContactInfoHandler)

// /api/contactsInfo/:id --> GET
router.get('/:id', getContactInfoHandler)

// /api/contactsInfo --> POST
router.post('/', createContactInfoHandler)

// /api/contactsInfo/:id --> PATCH
router.patch('/:id', updateContactInfoHandler)

// /api/contactsInfo/:id --> DELETE
router.delete('/:id', deleteContactInfoHandler)

export default router
