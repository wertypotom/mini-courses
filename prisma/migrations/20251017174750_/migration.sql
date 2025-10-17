-- CreateEnum
CREATE TYPE "public"."ROLE" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."ROLE" NOT NULL DEFAULT 'USER';
