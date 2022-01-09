export interface ICategory
{
    categoryId:string;
    categoryName: string;
    description: string;
    categoryParent: Category;
    subCategories: Array<Category>;
    categoryImage: string;
}

export class Category implements ICategory {
    constructor(
        public categoryId:string,
        public categoryName:string,
        public description:string,
        public categoryParent:Category,
        public subCategories: Array<Category>,
        public categoryImage: string,
    ) {
    }

  }