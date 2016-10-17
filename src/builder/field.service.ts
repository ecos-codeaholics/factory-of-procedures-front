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
                label: 'First name',
                value: 'Bombasto',
                required: true,
            })
        ];
        return fields;
    }
}
