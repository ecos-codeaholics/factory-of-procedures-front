import { Pipe, PipeTransform } from '@angular/core';

import { Procedure } from './procedure';

@Pipe({ name: 'ongoingFilter' })
export class ProcedureOngoingFilterPipe implements PipeTransform {
    transform(value, [status]) {
        return value.filter((item) => item.status === "ongoing");
    }
}
