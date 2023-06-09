import { images as imagesModel, Prisma } from '@prisma/client'

export type images = imagesModel

export type imagesType =
    | Prisma.imagesWhereInput
    | Prisma.imagesWhereUniqueInput
    | Prisma.imagesCreateInput
    | Prisma.imagesUpdateInput
    | Prisma.imagesDeleteArgs
