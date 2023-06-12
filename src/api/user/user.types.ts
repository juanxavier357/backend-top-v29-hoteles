import { users as usersModel, Prisma } from '@prisma/client'
export type users = usersModel

export type usersType =
  | Prisma.usersWhereInput
  | Prisma.usersWhereUniqueInput
  | Prisma.usersCreateInput
  | Prisma.usersUpdateInput
  | Prisma.usersDeleteArgs
