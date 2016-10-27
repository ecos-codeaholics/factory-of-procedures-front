import {FieldBase} from "./field-base";
/**
 * Created by davidmars on 26/10/16.
 */


export class FieldAreaBox extends FieldBase<string> {
    controlType = 'textarea';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}