/*
  Warnings:

  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `fk_user_location`;

-- DropTable
DROP TABLE `location`;

-- CreateTable
CREATE TABLE `locations` (
    `location_id` BIGINT NOT NULL AUTO_INCREMENT,
    `location_name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `location_name`(`location_name`),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_user_location` FOREIGN KEY (`location_id`) REFERENCES `locations`(`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
