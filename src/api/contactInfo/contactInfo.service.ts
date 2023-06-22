import { PrismaClient } from "@prisma/client";

import { contactsInfo } from './contactInfo.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllContactInfo() {
  const contactsInfo = await prisma.contactsInfo.findMany()
  return contactsInfo
}

export async function getContactInfoById(id: string) {
  const contactInfo = await prisma.contactsInfo.findUnique({
    where: {
      id,
    },
  })

  return contactInfo
}

export async function createContactInfo(data: contactsInfo) {
  const contactInfo = await prisma.contactsInfo.create({
    data,
  })

  return contactInfo
}

export async function updateContactInfo(id: string, data: contactsInfo) {
  const contactInfo = await prisma.contactsInfo.update({
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
  const contactInfo = await prisma.contactsInfo.delete({
    where: {
      id,
    },
  })

  return contactInfo
}
