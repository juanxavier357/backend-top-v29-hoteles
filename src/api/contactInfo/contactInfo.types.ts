import { contactInfos as contactInfosModel, Prisma } from '@prisma/client'

export type contactInfos = contactInfosModel

export type contactInfosType =
    | Prisma.contactInfosWhereInput
    | Prisma.contactInfosWhereUniqueInput
    | Prisma.contactInfosCreateInput
    | Prisma.contactInfosUpdateInput
    | Prisma.contactInfosDeleteArgs