import { PrismaClient } from "@prisma/client";

import { hotels } from './hotel.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllHotel() {
    const hotels = await prisma.hotels.findMany()
    return hotels
}

export async function getHotelById(id: string) {
    const hotel = await prisma.hotels.findUnique({
        where: {
            id,
        },
    })

    return hotel
}

export async function createHotel(data: hotels) {
    const hotel = await prisma.hotels.create({
        data,
    })

    return hotel
}

export async function updateHotel(id: string, data: hotels) {
    const hotel = await prisma.hotels.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return hotel
}

export async function deleteHotel(id: string) {
    const hotel = await prisma.hotels.delete({
        where: {
            id,
        },
    })

    return hotel
}