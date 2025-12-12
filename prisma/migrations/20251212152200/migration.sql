/*
  Warnings:

  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "account_accountId_providerId_key";

-- DropIndex
DROP INDEX "verification_identifier_value_key";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");
