
export interface IChantier
{
    //list facture/devis
    //list photos
    //client: User;
    //dates
    chantierId: string;
    worksiteName: string;
    clientLastName: string;
    clientId:string;
    description : string;
    address : string
    dateStart : string;
    dateEnd : string;
    isFinished : string;
    imagesChantier: Array<string>;
    imagesTicket: Array<string>;

}
export class Chantier implements IChantier {
    constructor(
        public chantierId:string,
        public worksiteName:string,
        public clientLastName:string,
        public clientId:string,
        public description: string,
        public address: string,
        public dateStart : string,
        public dateEnd : string,
        public isFinished: string,
        public imagesChantier : Array<string>,
        public imagesTicket : Array<string>,

    ) {
    }

  }