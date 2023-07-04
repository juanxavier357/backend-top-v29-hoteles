import { PrismaClient } from "@prisma/client";

import { locations } from './location.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllLocation() {
  const locations = await prisma.locations.findMany()
  return locations
}

export async function getLocationById(id: string) {
  const location = await prisma.locations.findUnique({
    where: {
      id,
    },
  })

  return location
}

export async function createLocation(data: locations) {
  const location = await prisma.locations.create({
    data,
  })

  return location
}

export async function updateLocation(id: string, data: locations) {
  const location = await prisma.locations.update({
    where: {
      id,
    },
    data: {
      ...data
    }
  })

  return location
}

export async function deleteLocation(id: string) {
  const location = await prisma.locations.delete({
    where: {
      id,
    },
  })

  return location
}
