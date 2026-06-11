import {Pool, ResultSetHeader, RowDataPacket} from "mysql2/promise";
import {Skill} from "../types/Skill";


export class SkillModel {
    constructor(private db: Pool) {}

    async create(
        skill_name: string,
        skill_description: string,
        category_name: string,
        available_dates: string[],
        user_id: number
    ) :Promise<Skill> {

        const [result] = await this.db.query<ResultSetHeader>(
            `INSERT INTO skills(skill_id, skill_name, skill_description,category_name) VALUES(NULL, ?, ?, ?) `,
                 [skill_name, skill_description, category_name]
        );

        const skillId = result.insertId;

        // newly added - insert into the junction table user_skills.
        await this.db.query<ResultSetHeader>(
            `INSERT INTO user_skills(user_skills_id, user_id, skill_id) VALUES(NULL, ?, ?)`,
            [user_id, skillId]
        );

        for (const date of available_dates) {
            await this.db.query<ResultSetHeader>(
                `INSERT INTO skill_availability(availability_id, skill_id, available_date, is_booked) VALUES(NULL, ?, ?, FALSE)`,
                [skillId, date]
            );
        }

        return {
            skill_id: BigInt(skillId),
            skill_name,
            skill_description,
            category_name
        } as Skill;
    }


    async getAllSkills():Promise<Skill[]> {
        const [rows] = await this.db.query<RowDataPacket[]> (
            `SELECT * FROM skills ORDER BY skill_id DESC`);
          return rows as Skill[];
    }

    async getSkillsByCategory(category_name: string)
        :Promise<Skill[]> {

        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT *
             FROM skills
             WHERE category_name = ?
             ORDER BY skill_id DESC`,
            [category_name]
        );
        return rows as Skill[];
    }


    async getSkillById(
        skill_id: bigint): Promise<Skill | null> {

            const [rows] = await this.db.query<RowDataPacket[]>(
                `SELECT * FROM skills WHERE skill_id = ?`,
                [skill_id]);

            return rows.length > 0
                ? rows[0] as Skill : null;
        }

    async getAvailableDates(skill_id: bigint){

        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT * FROM skill_availability WHERE skill_id = ? AND is_booked = FALSE ORDER BY available_date`,
            [skill_id]
        ) ;
        return rows;
    }

    async reserveDate(
        availability_id: number
    ): Promise<void> {
        await this.db.query(
            `
            UPDATE skill_availability
            SET is_booked = TRUE
            WHERE availability_id = ?`,
            [availability_id]

        )
    }

    async deleteSkill(
        skill_id: bigint
    ): Promise<boolean> {
        const [result] = await this.db.query<ResultSetHeader>(
            `DELETE FROM skills
                  WHERE skill_id = ?`,
            [skill_id]
        )
        return result.affectedRows > 0;
    }

}

