import { Category } from "./category";

export interface IProduct
{
    productId : string;
    productName: string;
    description: string;
    priceHtva: number;
    categoryId: string;
    imageProduct: string;
}

export class Product implements IProduct {
    constructor(
        public productId : string,
        public productName: string,
        public description: string,
        public priceHtva: number,
        public categoryId: string,
        public imageProduct: string,
    ) {
    }

  }