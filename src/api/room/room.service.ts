import { PrismaClient } from "@prisma/client";

import { rooms } from './room.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllRoom() {
    const rooms = await prisma.rooms.findMany()
    return rooms
}

export async function getRoomById(id: string) {
    const room = await prisma.rooms.findUnique({
        where: {
            id,
        },
    })

    return room
}

export async function createRoom(data: rooms) {
    const room = await prisma.rooms.create({
        data,
    })

    return room
}

export async function updateRoom(id: string, data: rooms) {
    const room = await prisma.rooms.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return room
}

export async function deleteRoom(id: string) {
    const room = await prisma.rooms.delete({
        where: {
            id,
        },
    })

    return room
}