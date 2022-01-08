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
    remise : number;
    priceHtva: number;
    tva : number;
    totalPrice: number;
    receivedMoney: Array<number>;
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
        public receivedMoney: Array<number>,

    ) 
    {
    }
    public GetAllReceivedMoney() : number
    {
        let total : number;
        this.receivedMoney.forEach(element => {
            total=element+total; 
        });
        return total;
    }
  }