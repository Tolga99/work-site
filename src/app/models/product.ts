import { Category } from "./category";

export interface IProduct
{
    productId : string;
    productName: string;
    description: string;
    quantity: string;
    priceHtva: DoubleRange;
    categoryId: string;
    imageProduct: string;
}

export class Product implements IProduct {
    constructor(
        public productId : string,
        public productName: string,
        public description: string,
        public quantity: string,
        public priceHtva: DoubleRange,
        public categoryId: string,
        public imageProduct: string,
    ) {
    }

  }