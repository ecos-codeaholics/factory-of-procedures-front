import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ongoingFilter' })
export class ProcedureOngoingFilterPipe implements PipeTransform {
    transform(value, [status]) {
        if (value == null) {
            return null;
        }
        return value.filter((item) => item.status === status);
    }
}
