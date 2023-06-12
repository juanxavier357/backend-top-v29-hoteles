import { PrismaClient } from "@prisma/client";

import { users } from './user.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllUsers() {
  const users = await prisma.users.findMany()
  return users
}

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  })

  return user
}

export async function createUser(data: users) {
  const user = await prisma.users.create({
    data,
  })

  return user
}

export async function updateUser(id: string, data: users) {
  const user = await prisma.users.update({
    where: {
      id,
    },
    data: {
      ...data
    }
  })

  return user
}

export async function deleteUser(id: string) {
  const user = await prisma.users.delete({
    where: {
      id,
    },
  })

  return user
}
