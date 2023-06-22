import { Request, Response } from "express";

import {
    getAllContactInfo,
    getContactInfoById,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo,
} from './contactInfo.service'

export async function getAllContactInfoHandler(req: Request, res: Response) {
    const contactInfos = await getAllContactInfo()

    return res.json(contactInfos)
}

export async function getContactInfoHandler(req: Request, res: Response) {
    const { id } = req.params

    const contactInfo = await getContactInfoById(id)

    if (!contactInfo) {
        return res.status(404).json({
            message: 'ContactInfo not found',
        })
    }

    return res.status(200).json(contactInfo)
}

export async function createContactInfoHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.name || !data.email || !data.phone) {
        return res.status(400).json({
            error: "Name, email or phone is missing",
        });
    }

    const contactInfo = await createContactInfo(data)

    return res.status(201).json(contactInfo)
}

export async function updateContactInfoHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const contactInfo = await updateContactInfo(id, data);
    if (!contactInfo) {
        return res.status(404).json({
            message: "ContactInfo not Found",
        });
    }
    return res.status(202).json(contactInfo);
}

export async function deleteContactInfoHandler(req: Request, res: Response) {
    const { id } = req.params

    const contactInfo = await getContactInfoById(id)

    if (!contactInfo) {
        return res.status(404).json({
            message: 'ContactInfo not found',
        })
    }

    await deleteContactInfo(id)

    return res.json({ message: 'ContactInfo deleted' })
}
