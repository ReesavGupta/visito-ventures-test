/*
  Warnings:

  - The primary key for the `School` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `School` table. All the data in the column will be lost.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `age` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_schoolId_fkey";

-- AlterTable
ALTER TABLE "School" DROP CONSTRAINT "School_pkey",
DROP COLUMN "id",
ADD COLUMN     "schoolId" SERIAL NOT NULL,
ADD CONSTRAINT "School_pkey" PRIMARY KEY ("schoolId");

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
DROP COLUMN "id",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "teacherId" SERIAL NOT NULL,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacherId");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("schoolId") ON DELETE RESTRICT ON UPDATE CASCADE;
