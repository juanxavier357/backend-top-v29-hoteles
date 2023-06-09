import { PrismaClient } from "@prisma/client";

import { images } from './image.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllImage() {
    const images = await prisma.images.findMany()
    return images
}

export async function getImageById(id: string) {
    const image = await prisma.images.findUnique({
        where: {
            id,
        },
    })

    return image
}

export async function createImage(data: images) {
    const image = await prisma.images.create({
        data,
    })

    return image
}

export async function updateImage(id: string, data: images) {
    const image = await prisma.images.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return image
}

export async function deleteImage(id: string) {
    const image = await prisma.images.delete({
        where: {
            id,
        },
    })

    return image
}