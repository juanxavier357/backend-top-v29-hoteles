import { PrismaClient } from "@prisma/client";

import { facilities } from './facility.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllFacility() {
    const facilities = await prisma.facilities.findMany()
    return facilities
}

export async function getFacilityById(id: string) {
    const facility = await prisma.facilities.findUnique({
        where: {
            id,
        },
    })

    return facility
}

export async function createFacility(data: facilities) {
    const facility = await prisma.facilities.create({
        data,
    })

    return facility
}

export async function updateFacility(id: string, data: facilities) {
    const facility = await prisma.facilities.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return facility
}

export async function deleteFacility(id: string) {
    const facility = await prisma.facilities.delete({
        where: {
            id,
        },
    })

    return facility
}
