import { hotels as hotelsModel, Prisma } from '@prisma/client'

export type hotels = hotelsModel

export type hotelsType =
    | Prisma.hotelsWhereInput
    | Prisma.hotelsWhereUniqueInput
    | Prisma.hotelsCreateInput
    | Prisma.hotelsUpdateInput
    | Prisma.hotelsDeleteArgs
