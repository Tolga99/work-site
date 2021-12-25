import { User } from "./user";

export interface invoice 
{
    invoiceId: number;
    //image
    admin: User;
    client: User;
    //date
    valid: boolean;
    //list product
    typePay: string;
    remise : DoubleRange;
    priceHtva: DoubleRange;
    tva : DoubleRange;
    totalPrice: DoubleRange;
}