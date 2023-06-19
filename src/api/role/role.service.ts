import { PrismaClient } from "@prisma/client";

import { roles } from './role.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllRoles() {
  const roles = await prisma.roles.findMany()
  return roles
}

export async function getRoleById(id: string) {
  const role = await prisma.roles.findUnique({
    where: {
      id,
    },
  })

  return role
}


export async function createRole(data: roles) {
  if (!data.name) {
    throw new Error("Name is required")
  }

  const role = await prisma.roles.create({
    data
  })

  return role
}

export async function updateRole(id: string, data: roles) {
  const role = await prisma.roles.update({
    where: {
      id,
    },
    data: {
      ...data
    }
  })

  return role
}

export async function deleteRole(id: string) {
  const role = await prisma.roles.delete({
    where: {
      id,
    },
  })

  return role
}
