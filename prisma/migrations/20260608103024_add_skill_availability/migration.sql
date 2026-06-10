-- CreateTable
CREATE TABLE `skill_availability` (
    `availability_id` BIGINT NOT NULL AUTO_INCREMENT,
    `skill_id` BIGINT NOT NULL,
    `available_date` DATETIME(3) NOT NULL,
    `is_booked` BOOLEAN NOT NULL DEFAULT false,

    INDEX `skill_availability_skill_id_idx`(`skill_id`),
    PRIMARY KEY (`availability_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `skill_availability` ADD CONSTRAINT `skill_availability_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skills`(`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE;
