import { PrismaClient } from "@prisma/client";

import { amenities } from './amenity.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllAmenities() {
  const amenities = await prisma.amenities.findMany()
  return amenities
}

export async function getAmenityById(id: string) {
  const amenities = await prisma.amenities.findUnique({
    where: {
      id,
    },
  })

  return amenities
}

export async function createAmenity(data: amenities) {
  const amenities = await prisma.amenities.create({
    data,
  })

  return amenities
}

export async function updateAmenity(id: string, data: amenities) {
  const amenities = await prisma.amenities.update({
    where: {
      id,
    },
    data: {
      ...data
    }
  })

  return amenities
}

export async function deleteAmenity(id: string) {
  const amenities = await prisma.amenities.delete({
    where: {
      id,
    },
  })

  return amenities
}
