
export class FieldValidation {

    constructor(
        public id: string,
        public maxlenght: boolean,
        public size: number,
        public dateFormat: string,
        public fileType: Array<string>
    ) { }
}
