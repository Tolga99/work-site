import { User } from "./user";

export interface estimate 
{
    estimateId: number;
    //image
    admin: User;
    client: User;
    //date
    valid: boolean;
    //list product
    remise : DoubleRange;
    priceHtva: DoubleRange;
    tva : DoubleRange;
    totalPrice: DoubleRange;
}