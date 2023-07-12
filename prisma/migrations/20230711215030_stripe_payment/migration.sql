/*
  Warnings:

  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_userId_fkey";

-- DropTable
DROP TABLE "payments";

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "cardBrand" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cardExpMonth" TEXT NOT NULL,
    "cardExpYear" TEXT NOT NULL,
    "cardCvc" TEXT NOT NULL,
    "cardPostalCode" TEXT NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
