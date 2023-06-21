import { PrismaClient } from '@prisma/client'
import { roleSeeder } from '../src/api/role/role.seeder'
import { userSeeder, userByRoleSeeder } from '../src/api/user/user.seeder'
const prisma = new PrismaClient()

async function main() {
  // Creando varios roles
  const createRoles = await prisma.roles.createMany({
    data: roleSeeder,
    skipDuplicates: true,
  })

  const createUsers = await prisma.users.createMany({
    data: userSeeder,
    skipDuplicates: true,
  })

  const createUserByRole = await prisma.userRoles.createMany({
    data: userByRoleSeeder,
    skipDuplicates: true,
  })

  console.log({ createRoles, createUsers, createUserByRole })
}

main()
  .then(async () => {
    console.log('Seed successful completed')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
