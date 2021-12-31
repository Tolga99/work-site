export interface IUser
{
    userId:string;
    firstName:string;
    lastName:string;
    address:string;
    phone:string;
    mail:string;
    //list chantiers
    tva:string;
}

export class User implements IUser {
    constructor(
        public userId:string,
        public firstName:string,
        public lastName:string,
        public address:string,
        public phone:string,
        public mail:string,
        //list chantiers
        public tva:string
    ) {
    }

  }