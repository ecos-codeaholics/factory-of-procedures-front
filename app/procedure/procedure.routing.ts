import { RouterModule } from '@angular/router';

import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';

export const routing = RouterModule.forChild([
    { path: '', component: ProcedureListComponent },
    { path: 'edit', component: ProcedureFormComponent }
]);
