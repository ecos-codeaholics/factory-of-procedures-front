import { FieldAttribute } from './field-attribute';
import { FieldOption } from './field-option';
import { FieldValidation } from './field-validation';

export class FormField {

    constructor(
        public id: string,
        public type: string,
        public label: string,
        public placeholder: string,
        public fieldAttribute: FieldAttribute,
        public fieldOption: FieldOption,
        public fieldValidation: FieldValidation,
        public required: boolean,
        public subtype: string,
        public description: string,
        public classname: string,
        public name: string,
        public maxlenght: number
    ) { }
}
