export class ProcedureHistory {
    constructor(
        public step: number,
        public date: string,
        public user: string,
        public status: string,
        public description: string
    ) { }
}
