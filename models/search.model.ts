import {SearchResult} from "../types/Search";
import {Pool,RowDataPacket} from "mysql2/promise";

export class SearchModel {
    constructor(private db: Pool) {}

    async search(query: string): Promise<SearchResult[]> {
        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT *
             FROM skills
             WHERE skill_name LIKE ?
                OR skill_description LIKE ?`,
            [`%${query}%`, `%${query}%`])

        return rows as SearchResult[];

    }}
