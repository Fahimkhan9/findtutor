/*
  Warnings:

  - Added the required column `postedById` to the `Tuition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tuition" ADD COLUMN     "postedById" TEXT NOT NULL;
