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

     getAllSkills = async (
         req: Request,
         res: Response
     ): Promise<void> => {
        const skills = await this.skillService.getAllSkills();

        res.json({
            message: "Skills successfully found",
            data: skills.map((skill) => ({
                ...skill,
                skill_id:
                skill.skill_id.toString()
            }))
        })
     }

     getSkillsByCategory = async (
         req: Request,
         res: Response
     ): Promise<void> => {

        const category_name = req.params.category_name as string;
        const skills = await this.skillService.getSkillByCategory(
            category_name
        );

        res.json({
            message: "Skills successfully found",
            data: skills.map((skill) => ({
                ...skill,
                skill_id: skill.skill_id.toString()
            }))
        })
     }

     getSkillById = async (
         req: Request,
         res: Response
     ): Promise<void> => {
        const skill_id = BigInt(req.params.id as string);
         const skill = await this.skillService.getSkillById(skill_id);

        res.json({
            message: "Skill successfully found",
            data:{
                ...skill,
                skill_id: skill?.skill_id.toString()
            }
        })
     }
}