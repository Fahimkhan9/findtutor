/*
  Warnings:

  - You are about to drop the column `class` on the `Tuition` table. All the data in the column will be lost.
  - Added the required column `year` to the `Tuition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tuition" DROP COLUMN "class",
ADD COLUMN     "year" TEXT NOT NULL;
