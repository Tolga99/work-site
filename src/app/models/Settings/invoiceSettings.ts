
export interface IInvoiceSettings
{
    factureName : string;
    exts: string;
    extType: string;
    extNum: number;
    positionAvant: boolean;
    positionApres: boolean;
}


export class InvoiceSettings implements IInvoiceSettings {
    constructor(
        public factureName : string,
        public exts: string,
        public extType: string,
        public extNum: number,
        public positionAvant: boolean,
        public positionApres: boolean,
    ) {
    }

  }