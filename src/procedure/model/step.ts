export class Step {
    constructor(
        public aprobacion: string,
        public dependency: string,
        public description: string,
        public functionary: string,
        public step: number
    ) { }
}
