export interface ICategory
{
    categoryId:string;
    categoryName: string;
    description: string;
    categoryParent: Category;
    categoryImage: string;
    catLevel : number;
}

export class Category implements ICategory {
    constructor(
        public categoryId:string,
        public categoryName:string,
        public description:string,
        public categoryParent:Category,
        public categoryImage: string,
        public catLevel : number,
    ) {
    }

  }