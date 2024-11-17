-- AlterTable
ALTER TABLE `user` MODIFY `isEmailVisible` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `isNameVisible` BOOLEAN NOT NULL DEFAULT true;
