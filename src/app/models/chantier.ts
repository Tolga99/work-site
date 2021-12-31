
export interface IChantier
{
    //list facture/devis
    //list photos
    //client: User;
    //dates
    chantierId: string;
    worksiteName: string;
    clientLastName: string;
    description : string;
    dateStart : string;
}
export class Chantier implements IChantier {
    constructor(
        public chantierId:string,
        public worksiteName:string,
        public clientLastName:string,
        public description: string,
        public dateStart : string,
    ) {
    }

  }