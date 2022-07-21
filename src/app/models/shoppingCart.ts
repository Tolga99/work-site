import { Product } from "./product";

export interface IShoppingCart
{
    cartId : string;
    product : Product;
    quantity : number;
}

export class ShoppingCart implements IShoppingCart {
    constructor(
        public cartId : string,
        public product : Product,
        public quantity : number,
    ) {
    }
  }