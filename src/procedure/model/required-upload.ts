
export class RequiredUpload {

    constructor(
        public type: string,
        public required: boolean,
        public label: string,
        public description: string,
        public className: string,
        public name: string
    ) { }
}
