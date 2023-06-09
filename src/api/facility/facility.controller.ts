import { Request, Response } from "express";

import {
    getAllFacility,
    getFacilityById,
    createFacility,
    updateFacility,
    deleteFacility,
} from './facility.service'

export async function getAllFacilityHandler(req: Request, res: Response) {
    const facilities = await getAllFacility()

    return res.json(facilities)
}

export async function getFacilityHandler(req: Request, res: Response) {
    const { id } = req.params

    const facility = await getFacilityById(id)

    if (!facility) {
        return res.status(404).json({
            message: 'Facility not found',
        })
    }

    return res.status(200).json(facility)
}

export async function createFacilityHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.name) {
        return res.status(400).json({
            error: "Name is missing",
        });
    }

    const facility = await createFacility(data)

    return res.status(201).json(facility)
}

export async function updateFacilityHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const facility = await updateFacility(id, data);
    if (!facility) {
        return res.status(404).json({
            message: "Facility not Found",
        });
    }
    return res.status(202).json(facility);
}

export async function deleteFacilityHandler(req: Request, res: Response) {
    const { id } = req.params

    const facility = await getFacilityById(id)

    if (!facility) {
        return res.status(404).json({
            message: 'Facility not found',
        })
    }

    await deleteFacility(id)

    return res.json({ message: 'Facility deleted' })
}
