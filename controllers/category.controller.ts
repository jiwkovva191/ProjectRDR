import {Request, Response} from 'express';
import {CategoryService} from '../services/category.service';

export class CategoryController {
    constructor(
        private categoryService: CategoryService)
    {}

    getAll = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        const categories = await this.categoryService.getAllCategories();

        res.json({
            message: "Categories found",
            data: categories.map(category => ({
                ...category,

                category_id:
                   category.category_id.toString()

            }))

        });
    };
}