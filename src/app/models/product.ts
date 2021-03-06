import { Category } from "./category";

export interface IProduct
{
    productId : string;
    productName: string;
    description: string;
    priceHtva: number;
    categoryParent: Category;
    imageProduct: string;
    catLevel: number;
}

export class Product implements IProduct {
    constructor(
        public productId : string,
        public productName: string,
        public description: string,
        public priceHtva: number,
        public categoryParent: Category,
        public imageProduct: string,
        public catLevel : number,
    ) {
    }

  }