import { PrismaClient } from "@prisma/client";

import { users } from './user.types'

import { hashPassword } from "../../auth/utils/bcrypt"

const prisma = new PrismaClient()


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


export async function getUserByEmail(email: string) {
  const foundUser = await prisma.users.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return foundUser || null;
}


export async function createUser(input: users) {
  if (!input.password) {
    throw new Error("Password is required")
  }
  const hashedPassword = await hashPassword(input.password)
  const data = {
    ...input,
    password: hashedPassword,
  }

  const user = await prisma.users.create({
    data
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
  await prisma.userRoles.deleteMany({
    where: {
      userId: id
    }
  });
  const user = await prisma.users.delete({
    where: {
      id,
    },
  })

  return user
}
