export interface IHour
{
    hourId:string;
    date : Date;
    description:string;
}

export class Hour implements IHour {
    constructor(
        public hourId:string,
        public date : Date,
        public description:string,
    ) 
    {
    }

  }