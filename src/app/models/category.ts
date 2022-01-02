export interface ICategory
{
    categoryId:string;
    categoryName: string;
    categoryParent: Category;
    categoryImage: string;
}

export class Category implements ICategory {
    constructor(
        public categoryId:string,
        public categoryName:string,
        public categoryParent:Category,
        public categoryImage: string,
    ) {
    }

  }