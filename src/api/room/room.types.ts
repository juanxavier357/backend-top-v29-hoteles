import { rooms as roomsModel, Prisma } from '@prisma/client'

export type rooms = roomsModel

export type roomsType =
    | Prisma.roomsWhereInput
    | Prisma.roomsWhereUniqueInput
    | Prisma.roomsCreateInput
    | Prisma.roomsUpdateInput
    | Prisma.roomsDeleteArgs
