import { locations as locationsModel, Prisma } from '@prisma/client'

export type locations = locationsModel

export type locationsType =
    | Prisma.locationsWhereInput
    | Prisma.locationsWhereUniqueInput
    | Prisma.locationsCreateInput
    | Prisma.locationsUpdateInput
    | Prisma.locationsDeleteArgs
