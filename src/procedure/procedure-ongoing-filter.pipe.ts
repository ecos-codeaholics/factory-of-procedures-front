import { Pipe, PipeTransform } from '@angular/core';

import { Procedure } from './procedure';

@Pipe({ name: 'ongoingFilter' })
export class ProcedureOngoingFilterPipe implements PipeTransform {
    transform(value, [status]) {
        /**
         * #ERROR en el BROWSER
         * platform-browser.umd.js:937 EXCEPTION: Error: Uncaught (in promise): TypeError: Cannot read property 'filter' of null
         *
         * se soluciono con el if
         *
         */
        if (value==null) {
            return null;
        }
        return value.filter((item) => item.status === status);
    }
}
