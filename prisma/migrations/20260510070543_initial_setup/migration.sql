-- CreateTable
CREATE TABLE `categories` (
    `category_id` BIGINT NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `category_name`(`category_name`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversations` (
    `conversation_id` BIGINT NOT NULL,
    `order_id` BIGINT NOT NULL,
    `sender_id` BIGINT NOT NULL,
    `message` TEXT NOT NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `fk_conversations_orders`(`order_id`),
    INDEX `fk_conversations_users_sender`(`sender_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `location_id` BIGINT NOT NULL AUTO_INCREMENT,
    `location_name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `location_name`(`location_name`),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` BIGINT NOT NULL AUTO_INCREMENT,
    `skill_id` BIGINT NOT NULL,
    `client_id` BIGINT NOT NULL,
    `offerer_id` BIGINT NOT NULL,
    `price` DOUBLE NOT NULL,
    `status` VARCHAR(10) NOT NULL,
    `appointment_date` DATETIME(0) NOT NULL,

    INDEX `fk_orders_skills`(`skill_id`),
    INDEX `fk_orders_users_client`(`client_id`),
    INDEX `fk_orders_users_offerer`(`offerer_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `review_id` BIGINT NOT NULL AUTO_INCREMENT,
    `rating` TINYINT NOT NULL,
    `comment` TEXT NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `reviewer_user_id` BIGINT NOT NULL,
    `reviewed_user_id` BIGINT NOT NULL,

    INDEX `fk_reviews_users_reviewed`(`reviewed_user_id`),
    INDEX `fk_reviews_users_reviewer`(`reviewer_user_id`),
    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `role_id` BIGINT NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(15) NOT NULL,

    UNIQUE INDEX `role_name`(`role_name`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skills` (
    `skill_id` BIGINT NOT NULL AUTO_INCREMENT,
    `skill_name` VARCHAR(20) NOT NULL,
    `category_name` VARCHAR(20) NOT NULL,
    `skill_description` TEXT NOT NULL,

    UNIQUE INDEX `skill_name`(`skill_name`),
    PRIMARY KEY (`skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_skills` (
    `user_skills_id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `skill_id` BIGINT NOT NULL,

    INDEX `fk_user_skills_skills`(`skill_id`),
    INDEX `fk_user_skills_users`(`user_id`),
    PRIMARY KEY (`user_skills_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` BIGINT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `role_id` BIGINT NOT NULL,
    `location_id` BIGINT NOT NULL,
    `bio` TEXT NOT NULL,

    INDEX `fk_user_location`(`location_id`),
    INDEX `fk_user_role`(`role_id`),
    UNIQUE INDEX `username`(`username`, `email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `fk_conversations_orders` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `fk_conversations_users_sender` FOREIGN KEY (`sender_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_skills` FOREIGN KEY (`skill_id`) REFERENCES `skills`(`skill_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_users_client` FOREIGN KEY (`client_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_users_offerer` FOREIGN KEY (`offerer_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `fk_reviews_users_reviewed` FOREIGN KEY (`reviewed_user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `fk_reviews_users_reviewer` FOREIGN KEY (`reviewer_user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_skills` ADD CONSTRAINT `fk_user_skills_skills` FOREIGN KEY (`skill_id`) REFERENCES `skills`(`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_skills` ADD CONSTRAINT `fk_user_skills_users` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_user_location` FOREIGN KEY (`location_id`) REFERENCES `location`(`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
