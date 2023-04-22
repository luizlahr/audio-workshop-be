/*
  Warnings:

  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
