import {PrismaClient} from "@prisma/client";
import {Skill} from "../types/Skill";


const prisma = new PrismaClient();

export class SkillModel {
    async create(
        skill_name: string,
        skill_description: string,
        category_name: string
    ) :Promise<Skill> {

        return await prisma.skills.create({
            data: {
                skill_name,
                skill_description,
                category_name
            }
        });
    }

    async getAllSkills():Promise<Skill[]> {
        return await prisma.skills.findMany({
            orderBy: {
                skill_id: "desc"
            }
        })
    }

    async getSkillsByCategory(category_name: string)
        :Promise<Skill[]> {

        return await prisma.skills.findMany({
            where: {
                category_name
            },
            orderBy: { skill_id: "desc"}
        })
    }


    async getSkillById(
        skill_id: bigint): Promise<Skill | null> {

        return await prisma.skills.findUnique({
            where: {skill_id}
        })
    }


}