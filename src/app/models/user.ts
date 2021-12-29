export interface IUser
{
    userId:number;
    lastName:string;
    firstName:string;
    address:string;
    phone:string;
    mail:string;
    //list chantiers
    tva:string;
}

export class User implements IUser {
    constructor(
        public userId:number,
        public lastName:string,
        public firstName:string,
        public address:string,
        public phone:string,
        public mail:string,
        //list chantiers
        public tva:string
    ) {
    }
  
  }