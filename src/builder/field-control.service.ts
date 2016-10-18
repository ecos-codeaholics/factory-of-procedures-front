/**
 * Created by davidmars on 17/10/16.
 */
import { Injectable }                          from '@angular/core';
import { FormControl, FormGroup, Validators }  from '@angular/forms';
import {FieldBase}                             from "./model/field-base";

@Injectable()
export class FieldControlService{

    constructor(){ }

    toFormGroup(fields: FieldBase<any>[] ) {
        let group: any = {};

        fields.forEach(field => {
            group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
