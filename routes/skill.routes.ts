import {Router} from 'express';
import {SkillModel} from "../models/skill.model";
import {SkillService} from "../services/skill.service";
import {SkillController} from "../controllers/skill.controller";
import pool from "../config/db";

const skillModel = new SkillModel(pool);
const skillService = new SkillService(skillModel);
const skillController = new SkillController(skillService);
const skillRoutes = Router();

skillRoutes.post(
    '/skills',
    skillController.create
);

skillRoutes.get(
    '/skills',
    skillController.getAllSkills
);

skillRoutes.get(
    "/skills/category/:category_name",
    skillController.getSkillsByCategory
)

skillRoutes.get(
    "/skills/:id/dates",
    skillController.getAvailableDates
)

skillRoutes.get(
    "/skills/:id",
    skillController.getSkillById
)

skillRoutes.patch(
    "/availability/:id",
    skillController.reserveDate
)

skillRoutes.get(
    "/users/:id/skills",
    skillController.getUserSkills
)

skillRoutes.delete(
    "/skills/:id",
    skillController.deleteSkill
)


export default skillRoutes;
