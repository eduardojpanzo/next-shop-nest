/*
  Warnings:

  - Added the required column `title` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_imageId_fkey";

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "imageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
