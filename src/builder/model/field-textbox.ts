import {FieldBase} from "./field-base";
/**
 * Created by davidmars on 17/10/16.
 */


export class FieldTextBox extends FieldBase<string> {
    controlType = 'text';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}