/*
  Warnings:

  - You are about to drop the column `imageId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_imageId_fkey";

-- DropIndex
DROP INDEX "products_imageId_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageId",
ADD COLUMN     "pathImage" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatarImage" TEXT;

-- DropTable
DROP TABLE "images";
