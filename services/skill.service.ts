import {SkillModel} from "../models/skill.model"
import {Skill} from "../types/Skill";

export class SkillService {
    constructor(private skillModel: SkillModel) {}

    async createSkill(
        skill_name: string,
        skill_description: string,
        category_name: string
    ): Promise<Skill> {

        return await this.skillModel.create(
            skill_name,
            skill_description,
            category_name,
        );
    }

}