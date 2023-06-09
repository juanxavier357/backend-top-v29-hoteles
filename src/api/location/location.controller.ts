import { Request, Response } from "express";

import {
    getAllLocation,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation,
} from './location.service'

export async function getAllLocationHandler(req: Request, res: Response) {
    const locations = await getAllLocation()

    return res.json(locations)
}

export async function getLocationHandler(req: Request, res: Response) {
    const { id } = req.params

    const location = await getLocationById(id)

    if (!location) {
        return res.status(404).json({
            message: 'Location not found',
        })
    }

    return res.status(200).json(location)
}

export async function createLocationHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.city || !data.address) {
        return res.status(400).json({
            error: "City or address is missing",
        });
    }

    const location = await createLocation(data)

    return res.status(201).json(location)
}

export async function updateLocationHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const location = await updateLocation(id, data);
    if (!location) {
        return res.status(404).json({
            message: "Location not Found",
        });
    }
    return res.status(202).json(location);
}

export async function deleteLocationHandler(req: Request, res: Response) {
    const { id } = req.params

    const location = await getLocationById(id)

    if (!location) {
        return res.status(404).json({
            message: 'Location not found',
        })
    }

    await deleteLocation(id)

    return res.json({ message: 'Location deleted' })
}
