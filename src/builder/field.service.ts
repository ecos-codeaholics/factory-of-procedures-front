/**
 * Created by davidmars on 17/10/16.
 */
import {Injectable}       from '@angular/core';
import {FieldBase}          from "./model/field-base";
import {FieldTextBox}       from "./model/field-textbox";
import {FieldAreaBox}       from "./model/field-textarea";

@Injectable()
export class FieldService {
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getFields() {
        let fields: FieldBase<any>[] = [

            new FieldTextBox({
                name: 'firstname',
                label: 'Pirmer Nombre',
                value: '',
                required: true,
            }),
            new FieldTextBox({
                name: 'lastName',
                label: 'Apellido',
                value: 'Perez',
                required: true,
            }),
            new FieldAreaBox({
                name: 'letter',
                label: 'Carta de Solicitud',
                value: 'Por favor por favor hagame en el tramite, se los ruego',
                required: true,
            })
        ];
        return fields;
    }
}
