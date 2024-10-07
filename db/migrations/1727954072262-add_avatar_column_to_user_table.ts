import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAvatarColumnToUserTable1727954072262 implements MigrationInterface {
    name = 'AddAvatarColumnToUserTable1727954072262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
    }

}
