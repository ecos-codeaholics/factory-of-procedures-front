import { Citizen } from '../citizen/citizen';
import { ProcedureData } from './model/procedure-data';
import { Step } from './model/step';

export class Procedure {

    constructor(
        public id: number,
        public className: string,
        public fileNumber: number,
        public citizen: Citizen,
        public mayoralty: string,
        public procedureData: ProcedureData,
        //public deliveryDocs: DeliveryDoc,
        public deliveryDocs: Array<string>,
        public steps: Step,
        public startDate: string,
        public finishDate: string,
        public status: string
    ) { }
}
