import { users as usersModel, roles as roleModel, Prisma } from '@prisma/client'
export type users = usersModel

export type usersType =
  | Prisma.usersWhereInput
  | Prisma.usersWhereUniqueInput
  | Prisma.usersCreateInput
  | Prisma.usersUpdateInput
  | Prisma.usersDeleteArgs

export type userWithRoles = users & {
  roles: {
    role: roleModel;
  }[];
};
