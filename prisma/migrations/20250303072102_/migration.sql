/*
  Warnings:

  - Added the required column `status` to the `inventories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_STOCK', 'OUT_OF_STOCK', 'IN_USE');

-- AlterTable
ALTER TABLE "inventories" ADD COLUMN     "status" "Status" NOT NULL;
