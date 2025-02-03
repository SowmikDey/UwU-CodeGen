/*
  Warnings:

  - You are about to drop the column `heading` on the `chatmessage` table. All the data in the column will be lost.
  - You are about to drop the column `sessionId` on the `chatmessage` table. All the data in the column will be lost.
  - You are about to drop the `chatsession` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `input` to the `chatmessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `chatmessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chatmessage" DROP CONSTRAINT "chatmessage_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "chatsession" DROP CONSTRAINT "chatsession_userId_fkey";

-- AlterTable
ALTER TABLE "chatmessage" DROP COLUMN "heading",
DROP COLUMN "sessionId",
ADD COLUMN     "input" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "chatsession";

-- AddForeignKey
ALTER TABLE "chatmessage" ADD CONSTRAINT "chatmessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
