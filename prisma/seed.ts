import { PrismaClient } from '@prisma/client';
import { roleSeeder } from '../src/api/role/role.seeder';
import { userSeeder, userByRoleSeeder } from '../src/api/user/user.seeder';
import { hotelSeeder } from '../src/api/hotel/hotel.seeder';
import { locationSeeder } from '../src/api/location/location.seeder';
import { imageSeeder } from '../src/api/image/image.seeder';
import { contactsInfoSeeder } from '../src/api/contactInfo/contactInfo.seeder';

const prisma = new PrismaClient();

async function main() {
  // Creando varios roles
  const createRoles = await prisma.roles.createMany({
    data: roleSeeder,
    skipDuplicates: true,
  });

  const createUsers = await prisma.users.createMany({
    data: userSeeder,
    skipDuplicates: true,
  });

  const createUserByRole = await prisma.userRoles.createMany({
    data: userByRoleSeeder,
    skipDuplicates: true,
  });

  const createHotels = await prisma.hotels.createMany({
    data: hotelSeeder,
    skipDuplicates: true,
  });

  const createLocations = await prisma.locations.createMany({
    data: locationSeeder,
    skipDuplicates: true,
  });

  const createImages = await prisma.images.createMany({
    data: imageSeeder,
    skipDuplicates: true,
  });

  const createContacsInfo = await prisma.contactsInfo.createMany({
    data: contactsInfoSeeder,
    skipDuplicates: true,
  });

  console.log({
    createRoles,
    createUsers,
    createUserByRole,
    createHotels,
    createLocations,
    createImages,
    createContacsInfo,
  });
}

main()
  .then(async () => {
    console.log('Seed successful completed');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
