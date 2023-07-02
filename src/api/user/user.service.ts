import { PrismaClient } from '@prisma/client';
import { users } from './user.types';
import { hashPassword, createHashToken } from '../../auth/utils/bcrypt';
const prisma = new PrismaClient();
export async function getAllUsers() {
  const users = await prisma.users.findMany();
  return users;
}
export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return user;
}
export async function getUserByEmail(email: string) {
  const foundUser = await prisma.users.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return foundUser || null;
}
export async function getUserByToken(token: string) {
  const user = await prisma.users.findFirst({
    where: {
      passwordResetToken: token,
      // passwordResetExpires: {
      //   lte: new Date(),
      // }
    },
  });
  return user;
}
export async function createUser(input: users) {
  if (!input.password) {
    throw new Error('Password is required');
  }
  const hashedPassword = await hashPassword(input.password);
  const expiresIn = Date.now() + 3_600_000 * 24; // 24 horas
  const data = {
    ...input,
    password: hashedPassword,
    roles: {
      create: {
        roleId: 'Hotel_User_2',
      },
    },
    passwordResetToken: createHashToken(input.email),
    passwordResetExpires: new Date(expiresIn), // 24 horas
  };
  const user = await prisma.users.create({
    data,
  });
  return user;
}
export async function updateUser(id: string, data: users) {
  const user = await prisma.users.update({
    where: {
      id,
    },
    include: {
      roles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
    data: {
      ...data,
    },
  });
  return user;
}
export async function deleteUser(id: string) {
  await prisma.userRoles.deleteMany({
    where: {
      userId: id,
    },
  });
  const user = await prisma.users.delete({
    where: {
      id,
    },
  });
  return user;
}
