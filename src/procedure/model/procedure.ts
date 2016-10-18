import { Activity } from './activity';
import { RequiredUpload } from './required-upload';
import { FormField } from './form-field';

import {FieldBase}          from "../../builder/model/field-base";

export class Procedure {

    constructor(
        public id: string,
        public name: string,
        public mayoralty: string,
        public activities: Array<Activity>,
        public required: Array<RequiredUpload>,
        public fields: FieldBase<any>[]
    ) { }
}
