/**
 * Created by davidmars on 17/10/16.
 */
export class FieldBase<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;
    classname: string;
    controlType: string;

    constructor(options: {
        value?: T,
        name?: string,
        label?: string,
        required?: boolean,
        classname?: string,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.name = options.name || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.classname = options.classname;
        this.controlType = options.controlType || '';
    }
}
