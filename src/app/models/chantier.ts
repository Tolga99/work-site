import { Facture } from './facture';
import { Hour } from './hour';

export interface IChantier
{
    // list facture/devis
    // list photos
    // client: User;
    // dates
    chantierId: string;
    worksiteName: string;
   // clientLastName: string;
    clientId:string;
    clientFullName:string;
    description : string;
    address : string
    dateStart : string;
    dateEnd : string;
    isFinished : string;
    imagesChantier: Array<string>;
    imagesTicket: Array<string>;
    factures : Array<Facture>;
    devis : Array<Facture>;
    hours : Array<Hour>;


}
export class Chantier implements IChantier {
    constructor(
        public chantierId:string,
        public worksiteName:string,
      //  public clientLastName:string,
        public clientId:string,
        public clientFullName: string,
        public description: string,
        public address: string,
        public dateStart : string,
        public dateEnd : string,
        public isFinished: string,
        public imagesChantier : Array<string>,
        public imagesTicket : Array<string>,
        public factures : Array<Facture>,
        public devis : Array<Facture>,
        public hours : Array<Hour>,

    ) {
    }

  }