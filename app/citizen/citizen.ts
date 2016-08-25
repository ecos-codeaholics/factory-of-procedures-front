export class Citizen {

    constructor(
        public _id: string,
        public identification: number,
        public name: string,
        public lastName1: string,
        public lastName2: string,
        public birthDate: string,
        public email: string,
        public password: string
    ) { }
}
