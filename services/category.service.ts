import {CategoryModel} from "../models/category.model";
import {Category} from "../types/Category";

export class CategoryService {

    constructor(
        private categoryModel: CategoryModel)
    {}

    async getAllCategories(): Promise<Category[]> {
        return await this.categoryModel.getAllCategories();
    }
}