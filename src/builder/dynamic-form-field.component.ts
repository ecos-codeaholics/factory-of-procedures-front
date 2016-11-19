/**
 * Created by davidmars on 17/10/16.
 */
import {Component, Input} from '@angular/core';
import {FormGroup}        from '@angular/forms';
import {FieldBase}        from "./model/field-base";


@Component({
    selector: 'df-field',
    templateUrl: 'src/builder/templates/dynamic-form-field.component.html'
})

export class DynamicFormFieldComponent {
    @Input() field: FieldBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.field.label].valid;
    }

}