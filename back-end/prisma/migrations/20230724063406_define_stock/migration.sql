/*
  Warnings:

  - You are about to drop the column `amount` on the `products` table. All the data in the column will be lost.
  - Added the required column `salaAmount` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockAmount` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "amount",
ADD COLUMN     "salaAmount" INTEGER NOT NULL,
ADD COLUMN     "stockAmount" INTEGER NOT NULL;
