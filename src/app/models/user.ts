export interface IUser
{
    userId:string;
    firstName:string;
    lastName:string;
    address:string;
    phone:string;
    mail:string;
    historique : Array<string>;
    // list chantiers
    tva:string;
    iban:string;
    bic:string;
}

export class User implements IUser {
    constructor(
        public userId:string,
        public firstName:string,
        public lastName:string,
        public address:string,
        public phone:string,
        public mail:string,
        public historique : Array<string>,

        // list chantiers
        public tva:string,
        public iban:string,
        public bic:string

    ) {
    }
    public toString()
    {
        return this.lastName.toUpperCase() + ' ' + this.firstName;
    }
  }