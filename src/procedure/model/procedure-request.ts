import { Citizen } from '../../citizen/citizen';
import { ProcedureData } from './procedure-data';
import { Step } from './step';

export class ProcedureRequest {

    constructor(
        public id: number,
        public className: string,
        public fileNumber: number,
        public citizen: Citizen,
        public mayoralty: string,
        public procedureData: ProcedureData,
        //public deliveryDocs: DeliveryDoc,
        //public deliveryDocs: Array<string>,
        public deliveryDocs: Object,
        public steps: Step,
        public startDate: string,
        public finishDate: string,
        public status: string
    ) { }
}
