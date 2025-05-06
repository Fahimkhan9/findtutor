-- CreateTable
CREATE TABLE "TuitionApplication" (
    "id" SERIAL NOT NULL,
    "tuitionId" INTEGER NOT NULL,
    "tutorId" INTEGER NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TuitionApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TuitionApplication_tuitionId_tutorId_key" ON "TuitionApplication"("tuitionId", "tutorId");

-- AddForeignKey
ALTER TABLE "TuitionApplication" ADD CONSTRAINT "TuitionApplication_tuitionId_fkey" FOREIGN KEY ("tuitionId") REFERENCES "Tuition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuitionApplication" ADD CONSTRAINT "TuitionApplication_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
