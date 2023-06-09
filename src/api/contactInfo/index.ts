import { Router } from 'express'

import {
    getAllContactInfoHandler,
    getContactInfoHandler,
    createContactInfoHandler,
    updateContactInfoHandler,
    deleteContactInfoHandler,
} from './contactInfo.controller'

const router = Router()

// /api/contactInfos --> GET
router.get('/', getAllContactInfoHandler)

// /api/contactInfos/:id --> GET
router.get('/:id', getContactInfoHandler)

// /api/contactInfos --> POST
router.post('/', createContactInfoHandler)

// /api/contactInfos/:id --> PATCH
router.patch('/:id', updateContactInfoHandler)

// /api/contactInfos/:id --> DELETE
router.delete('/:id', deleteContactInfoHandler)

export default router