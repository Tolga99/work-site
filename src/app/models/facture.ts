export interface IFacture 
{
    factureId: string;
    factureName: string;
    //image
    //admin: User;
    //client: User;
    //date
    //valid: boolean;
    //list product
    description : string;
    images : Array<string>;
    date : string;
    typePay: string;
    remise : DoubleRange;
    priceHtva: DoubleRange;
    tva : DoubleRange;
    totalPrice: DoubleRange;
    receivedMoney: Array<DoubleRange>;
}
export class Facture implements IFacture {
    constructor(
        public factureId:string,
        public factureName: string,
        public description: string,
        public date : string,
        public typePay: string,
        public remise : DoubleRange,
        public priceHtva: DoubleRange,
        public tva : DoubleRange,
        public totalPrice: DoubleRange,
        public images: Array<string>,
        public receivedMoney: Array<DoubleRange>,

    ) 
    {
    }

  }