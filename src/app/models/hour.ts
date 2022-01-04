export interface IHour
{
    hourId:string;
    date : string;
    description:string;
    hour : number;
    minute : number;
    workTime: string;
}

export class Hour implements IHour {
    public workTime : string;
    constructor(
        public hourId:string,
        public date : string,
        public description:string,
        public hour : number,
        public minute : number,
    ) 
    {
        this.workTime = hour.toString() + 'h'+minute.toString();
    }

  }