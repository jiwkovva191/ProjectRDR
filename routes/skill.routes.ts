import {Router} from 'express';
import {SkillModel} from "../models/skill.model";
import {SkillService} from "../services/skill.service";
import {SkillController} from "../controllers/skill.controller";

const skillModel = new SkillModel();

const skillService = new SkillService(skillModel);

const skillController = new SkillController(skillService);

const skillRoutes = Router();

skillRoutes.post(
    '/skills',
    skillController.create
);

export default skillRoutes;
