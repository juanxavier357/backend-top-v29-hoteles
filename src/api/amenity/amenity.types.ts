import { amenities as amenitiesModel, Prisma } from '@prisma/client'
export type amenities = amenitiesModel

export type amenitiesType =
  | Prisma.amenitiesWhereInput
  | Prisma.amenitiesWhereUniqueInput
  | Prisma.amenitiesCreateInput
  | Prisma.amenitiesUpdateInput
  | Prisma.amenitiesDeleteArgs
