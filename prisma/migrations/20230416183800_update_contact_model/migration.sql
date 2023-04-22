/*
  Warnings:

  - You are about to drop the column `type` on the `contacts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ContactType" AS ENUM ('fisica', 'juridica');

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "type";
