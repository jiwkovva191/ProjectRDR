import { PrismaClient } from "@prisma/client"
import { Category } from "../types/Category";

const prisma = new PrismaClient();

export class CategoryModel {

    async getAllCategories() : Promise<Category[]> {
        return await prisma.categories.findMany();
    }
}