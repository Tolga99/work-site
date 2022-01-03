export interface ICategory
{
    categoryId:string;
    categoryName: string;
    description: string;
    categoryParent: string;
    categoryImage: string;
}

export class Category implements ICategory {
    constructor(
        public categoryId:string,
        public categoryName:string,
        public description:string,
        public categoryParent:string,
        public categoryImage: string,
    ) {
    }

  }