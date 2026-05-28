import {Router} from 'express';
import {CategoryModel} from "../models/category.model";
import {CategoryService} from "../services/category.service";
import {CategoryController} from "../controllers/category.controller";

const categoryModel = new CategoryModel();
const categoryService = new CategoryService(categoryModel);
const categoryController = new CategoryController(categoryService);

const categoryRoutes = Router();

categoryRoutes.get(
    "/categories",
    categoryController.getAll
);

export default categoryRoutes;