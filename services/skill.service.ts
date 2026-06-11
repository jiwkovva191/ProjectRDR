import {SkillModel} from "../models/skill.model"
import {Skill} from "../types/Skill";

export class SkillService {
    constructor(private skillModel: SkillModel) {}

    async createSkill(
        skill_name: string,
        skill_description: string,
        category_name: string,
        available_dates: string[],
        user_id: number
    ): Promise<Skill> {

        return await this.skillModel.create(
            skill_name,
            skill_description,
            category_name,
            available_dates,
            user_id
        );
    }

    async getAllSkills(): Promise<Skill[]> {
        return await this.skillModel.getAllSkills();
    }

    async getSkillByCategory(category_name: string
    ) :Promise<Skill[]> {

        return await this.skillModel.getSkillsByCategory(
            category_name
        );
    }

    async getSkillById(
        skill_id: bigint): Promise<Skill | null> {

        return await this.skillModel.getSkillById(skill_id);

    }

    async getAvailableDates(skill_id: bigint){
        return await this.skillModel.getAvailableDates(skill_id);
    }

    async reserveDate( availability_id:number): Promise<void> {
        await this.skillModel.reserveDate(availability_id);
    }

    async getUserSkills(user_id: number): Promise<Skill[]> {
        return await this.skillModel.getUserSkills(user_id);
    }

    async deleteSkill(skill_id: bigint): Promise<void> {
        await this.skillModel.deleteSkill(skill_id);
    }
}