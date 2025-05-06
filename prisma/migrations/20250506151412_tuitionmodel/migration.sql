-- CreateTable
CREATE TABLE "Tuition" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "subjects" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "mode" TEXT NOT NULL,

    CONSTRAINT "Tuition_pkey" PRIMARY KEY ("id")
);
