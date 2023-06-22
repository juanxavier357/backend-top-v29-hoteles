import { reservations as reservationsModel, Prisma } from '@prisma/client'

export type reservations = reservationsModel

export type reservationsType =
    | Prisma.reservationsWhereInput
    | Prisma.reservationsWhereUniqueInput
    | Prisma.reservationsCreateInput
    | Prisma.reservationsUpdateInput
    | Prisma.reservationsDeleteArgs
