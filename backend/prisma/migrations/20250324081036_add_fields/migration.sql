/*
  Warnings:

  - A unique constraint covering the columns `[schoolCode]` on the table `School` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacherCode]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `schoolCode` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherCode` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" ADD COLUMN     "schoolCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "teacherCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "School_schoolCode_key" ON "School"("schoolCode");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_teacherCode_key" ON "Teacher"("teacherCode");
