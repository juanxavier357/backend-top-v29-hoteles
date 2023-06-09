import { Request, Response } from "express";

import {
    getAllRoom,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom,
} from './room.service'

export async function getAllRoomHandler(req: Request, res: Response) {
    const rooms = await getAllRoom()

    return res.json(rooms)
}

export async function getRoomHandler(req: Request, res: Response) {
    const { id } = req.params

    const room = await getRoomById(id)

    if (!room) {
        return res.status(404).json({
            message: 'Room not found',
        })
    }

    return res.status(200).json(room)
}

export async function createRoomHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.number_beds || !data.price_night) {
        return res.status(400).json({
            error: "Number beds or price night is missing",
        });
    }

    const room = await createRoom(data)

    return res.status(201).json(room)
}

export async function updateRoomHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const room = await updateRoom(id, data);
    if (!room) {
        return res.status(404).json({
            message: "Room not Found",
        });
    }
    return res.status(202).json(room);
}

export async function deleteRoomHandler(req: Request, res: Response) {
    const { id } = req.params

    const room = await getRoomById(id)

    if (!room) {
        return res.status(404).json({
            message: 'Room not found',
        })
    }

    await deleteRoom(id)

    return res.json({ message: 'Room deleted' })
}