import { Product } from "./product";

export interface IShoppingCart
{
    product : Product;
    quantity : number;
}

export class ShoppingCart implements IShoppingCart {
    constructor(
        public product : Product,
        public quantity : number,
    ) {
    }
  }