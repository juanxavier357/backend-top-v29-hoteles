import { PrismaClient } from "@prisma/client";

import { contactInfos } from './contactInfo.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllContactInfo() {
    const contactInfos = await prisma.contactInfos.findMany()
    return contactInfos
}

export async function getContactInfoById(id: string) {
    const contactInfo = await prisma.contactInfos.findUnique({
        where: {
            id,
        },
    })

    return contactInfo
}

export async function createContactInfo(data: contactInfos) {
    const contactInfo = await prisma.contactInfos.create({
        data,
    })

    return contactInfo
}

export async function updateContactInfo(id: string, data: contactInfos) {
    const contactInfo = await prisma.contactInfos.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return contactInfo
}

export async function deleteContactInfo(id: string) {
    const contactInfo = await prisma.contactInfos.delete({
        where: {
            id,
        },
    })

    return contactInfo
}
