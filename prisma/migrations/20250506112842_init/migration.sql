-- CreateTable
CREATE TABLE "Tutor" (
    "id" SERIAL NOT NULL,
    "institution" TEXT NOT NULL,
    "subjects" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "sampleTeachingVideo" TEXT NOT NULL,
    "subjectToTeach" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");
