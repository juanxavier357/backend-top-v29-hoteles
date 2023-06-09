import { Request, Response } from "express";

import {
    getAllHotel,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
} from './hotel.service'

export async function getAllHotelHandler(req: Request, res: Response) {
    const hotels = await getAllHotel()

    return res.json(hotels)
}

export async function getHotelHandler(req: Request, res: Response) {
    const { id } = req.params

    const hotel = await getHotelById(id)

    if (!hotel) {
        return res.status(404).json({
            message: 'Hotel not found',
        })
    }

    return res.status(200).json(hotel)
}

export async function createHotelHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.title || !data.about) {
        return res.status(400).json({
            error: "Title or about is missing",
        });
    }

    const hotels = await getAllHotel();
    const existingHotel = hotels.find((hotel) => hotel.title === data.title);

    if (existingHotel) {
        return res.status(400).json({
            error: "Title must be unique",
        });
    }

    const hotel = await createHotel(data)

    return res.status(201).json(hotel)
}

export async function updateHotelHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const hotel = await updateHotel(id, data);
    if (!hotel) {
        return res.status(404).json({
            message: "Hotel not Found",
        });
    }
    return res.status(202).json(hotel);
}

export async function deleteHotelHandler(req: Request, res: Response) {
    const { id } = req.params

    const hotel = await getHotelById(id)

    if (!hotel) {
        return res.status(404).json({
            message: 'Hotel not found',
        })
    }

    await deleteHotel(id)

    return res.json({ message: 'Hotel deleted' })
}
