-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "mname" TEXT,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatsession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chatsession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatmessage" (
    "id" TEXT NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chatmessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "chatsession" ADD CONSTRAINT "chatsession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chatmessage" ADD CONSTRAINT "chatmessage_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "chatsession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
