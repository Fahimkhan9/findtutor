/*
  Warnings:

  - Changed the type of `salary` on the `Tuition` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tuition" DROP COLUMN "salary",
ADD COLUMN     "salary" INTEGER NOT NULL;
