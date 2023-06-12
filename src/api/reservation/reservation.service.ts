import { PrismaClient } from "@prisma/client";

import { reservations } from './reservation.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllReservation() {
    const reservations = await prisma.reservations.findMany()
    return reservations
}

export async function getReservationById(id: string) {
    const reservation = await prisma.reservations.findUnique({
        where: {
            id,
        },
    })

    return reservation
}

export async function createReservation(data: reservations) {
    const reservation = await prisma.reservations.create({
        data,
    })

    return reservation
}

export async function updateReservation(id: string, data: reservations) {
    const reservation = await prisma.reservations.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return reservation
}

export async function deleteReservation(id: string) {
    const reservation = await prisma.reservations.delete({
        where: {
            id,
        },
    })

    return reservation
}
