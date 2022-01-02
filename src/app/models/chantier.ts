
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
    dateStart : string;
    imagesChantier: Array<string>;

}
export class Chantier implements IChantier {
    constructor(
        public chantierId:string,
        public worksiteName:string,
        public clientLastName:string,
        public clientId:string,
        public description: string,
        public dateStart : string,
        public imagesChantier : Array<string>,
    ) {
    }

  }