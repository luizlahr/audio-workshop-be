-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "phone" TEXT,
    "nid" TEXT,
    "ssn" TEXT,
    "address_street" TEXT,
    "address_number" TEXT,
    "address_extra" TEXT,
    "district" TEXT,
    "city" TEXT,
    "zipcode" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");
