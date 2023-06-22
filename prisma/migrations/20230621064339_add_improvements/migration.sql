/*
  Warnings:

  - You are about to drop the column `roomsId` on the `amenities` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `contactInfos` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `facilities` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `rolesId` on the `userRoles` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `userRoles` table. All the data in the column will be lost.
  - Added the required column `roomId` to the `amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `contactInfos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `facilities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelId` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `userRoles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `userRoles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "amenities" DROP CONSTRAINT "amenities_roomsId_fkey";

-- DropForeignKey
ALTER TABLE "contactInfos" DROP CONSTRAINT "contactInfos_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "facilities" DROP CONSTRAINT "facilities_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_usersId_fkey";

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_usersId_fkey";

-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "userRoles" DROP CONSTRAINT "userRoles_rolesId_fkey";

-- DropForeignKey
ALTER TABLE "userRoles" DROP CONSTRAINT "userRoles_usersId_fkey";

-- AlterTable
ALTER TABLE "amenities" DROP COLUMN "roomsId",
ADD COLUMN     "roomId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "contactInfos" DROP COLUMN "hotelsId",
ADD COLUMN     "hotelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "facilities" DROP COLUMN "hotelsId",
ADD COLUMN     "hotelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "hotelsId",
ADD COLUMN     "hotelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "usersId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "hotelsId",
DROP COLUMN "usersId",
ADD COLUMN     "hotelId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "hotelsId",
ADD COLUMN     "hotelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "userRoles" DROP COLUMN "rolesId",
DROP COLUMN "usersId",
ADD COLUMN     "roleId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRoles" ADD CONSTRAINT "userRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facilities" ADD CONSTRAINT "facilities_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amenities" ADD CONSTRAINT "amenities_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contactInfos" ADD CONSTRAINT "contactInfos_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
