import { Product } from './product';
import { ShoppingCart } from './shoppingCart';

export interface IFacture
{
    factureId: string;
    factureName: string;
    // image
    // admin: User;
    // client: User;
    // date
    // valid: boolean;
    // list product
    cart : Array<ShoppingCart>;
    description : string;
    images : Array<string>;
    date : string;
    typePay: string;
    remise : number;
    priceHtva: number;
    tva : number;
    totalPrice: number;
    receivedMoney: Array<{ price: number, date: string}>;
    mode : string ; // SCAN OU CREE
    type : string; // Facture ou Devis;
}
export class Facture implements IFacture {
    constructor(
        public factureId:string,
        public factureName: string,
        public description: string,
        public date : string,
        public typePay: string,
        public remise : number,
        public priceHtva: number,
        public tva : number,
        public totalPrice: number,
        public images: Array<string>,
        // public receivedMoney: Array<number>,
        public receivedMoney: Array<{ price: number, date: string}>,
        public cart : Array<ShoppingCart>,
        public mode : string ,// SCAN OU CREE
        public type : string, // Facture ou Devis;

    )
    {
    }
    public GetAllReceivedMoney() : number
    {
        const total=0;
        // this.receivedMoney.forEach(element => {
        //     total=element+total;
        // });
        return total;
    }
    public GetProductsTotalPrice() : number
    {
        let total : number;
        this.cart.forEach(element => {
            total += element.product.priceHtva * element.quantity;
        })
        return total;
    }
  }