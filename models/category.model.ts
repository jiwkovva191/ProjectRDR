import { Category } from "../types/Category";
import {Pool, RowDataPacket} from "mysql2/promise";

export class CategoryModel {
constructor(private db: Pool) {}

    async getAllCategories() : Promise<Category[]> {
        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT * FROM categories`
        )

        return rows as Category[];
    }
}