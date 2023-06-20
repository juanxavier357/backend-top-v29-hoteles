import { roles as rolesModel, roles as roleModel, Prisma } from '@prisma/client'
export type roles = rolesModel

export type roleType =
  | Prisma.rolesWhereInput
  | Prisma.rolesWhereUniqueInput
  | Prisma.rolesCreateInput
  | Prisma.rolesUpdateInput
  | Prisma.rolesDeleteArgs
