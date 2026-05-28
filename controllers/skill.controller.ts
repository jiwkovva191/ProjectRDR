import {Request, Response} from 'express';
import {SkillService} from '../services/skill.service';

export class SkillController {
    constructor(private skillService: SkillService) {}

    create = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        const {
            skill_name,
            skill_description,
            category_name
        } = req.body;

        const skill =
            await this.skillService.createSkill(
                skill_name,
                skill_description,
                category_name
            );

        res.json({
            message: 'Skill successfully saved',
            data:{
                ...skill,
                skill_id:
                  skill.skill_id.toString()

            }
        }

        );
    }
}