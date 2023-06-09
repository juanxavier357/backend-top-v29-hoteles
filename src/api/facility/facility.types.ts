import { facilities as facilitiesModel, Prisma } from '@prisma/client'

export type facilities = facilitiesModel

export type facilitiesType =
    | Prisma.facilitiesWhereInput
    | Prisma.facilitiesWhereUniqueInput
    | Prisma.facilitiesCreateInput
    | Prisma.facilitiesUpdateInput
    | Prisma.facilitiesDeleteArgs
