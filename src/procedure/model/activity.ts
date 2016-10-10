
export class Activity {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public dependency: string,
        public step: number,
        public functionary: string
    ) { }
}
