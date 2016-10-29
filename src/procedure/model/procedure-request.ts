import { Citizen } from '../../citizen/citizen';
import { ProcedureData } from './procedure-data';
import { Activity } from './activity';
import { ProcedureHistory } from './procedure-history';

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
        public activity: Array<Activity>,
        public startDate: string,
        public finishDate: string,
        public status: string,
        public histories: Array<ProcedureHistory>
    ) { }
}
