/**
 * Created by davidmars on 17/10/16.
 */
export class FieldBase<T> {
    value: T;
    type: string;
    name: string;
    label: string;
    required: boolean;
    classname: string;
    description: string;
    placeholder: string;
    subtype: string;
    controlType: string;

    constructor(options: {
        value?: T,
        type?: string,
        name?: string,
        label?: string,
        required?: boolean,
        classname?: string,
        description?: string,
        placeholder?: string,
        subtype?: string,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.name = options.name || '';
        this.type = options.type || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.classname = options.classname;
        this.description = options.description || '';
        this.placeholder = options.placeholder || '';
        this.subtype = options.subtype || '';
        this.controlType = options.controlType || '';
    }
}
