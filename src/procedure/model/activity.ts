import { Status } from './status';

export class Activity {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public dependency: string,
        public step: number,
        public functionary: string,
        public aprobacion: string,
        public status: Status
    ) { }
}
