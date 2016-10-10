import { Activity } from './activity';
import { RequiredUpload } from './required-upload';
import { FormField } from './form-field';

export class Procedure {

    constructor(
        public id: string,
        public name: string,
        public mayoralty: string,
        public activities: Array<Activity>,
        public requiredUpload: Array<RequiredUpload>,
        public fields: Array<FormField>
    ) { }
}
