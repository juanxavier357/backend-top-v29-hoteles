import { Request, Response } from "express";

import {
    getAllReservation,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation,
} from './reservation.service'

export async function getAllReservationHandler(req: Request, res: Response) {
    const reservations = await getAllReservation()

    return res.json(reservations)
}

export async function getReservationHandler(req: Request, res: Response) {
    const { id } = req.params

    const reservation = await getReservationById(id)

    if (!reservation) {
        return res.status(404).json({
            message: 'Reservation not found',
        })
    }

    return res.status(200).json(reservation)
}

export async function createReservationHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.startDate || !data.endDate || !data.paymentStatus) {
        return res.status(400).json({
            error: "Start date, end date or payment status address is missing",
        });
    }

    const reservation = await createReservation(data)

    return res.status(201).json(reservation)
}

export async function updateReservationHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const reservation = await updateReservation(id, data);
    if (!reservation) {
        return res.status(404).json({
            message: "Reservation not Found",
        });
    }
    return res.status(202).json(reservation);
}

export async function deleteReservationHandler(req: Request, res: Response) {
    const { id } = req.params

    const reservation = await getReservationById(id)

    if (!reservation) {
        return res.status(404).json({
            message: 'Reservation not found',
        })
    }

    await deleteReservation(id)

    return res.json({ message: 'Reservation deleted' })
}
