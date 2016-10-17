/**
 * Created by davidmars on 17/10/16.
 */
import { Injectable }       from '@angular/core';
import {FieldBase}          from "./model/field-base";
import {FieldTextBox}       from "./model/field-textbox";

@Injectable()
export class FieldService {
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getFields() {
        let fields: FieldBase<any>[] = [

            new FieldTextBox({
                name: 'firstName',
                label: 'Pirmer Nombre',
                value: 'Pepito',
                required: true,
            }),
            new FieldTextBox({
                name: 'lastName',
                label: 'Apellido',
                value: 'Perez',
                required: true,
            })
        ];
        return fields;
    }
}
