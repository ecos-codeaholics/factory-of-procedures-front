import { RouterModule } from '@angular/router';

import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';

import { AuthGuardService } from '../auth/auth-guard.service';


export const routing = RouterModule.forChild([
    { path: '', component: ProcedureListComponent, // canActivate: [AuthGuardService] },
    { path: 'edit', component: ProcedureFormComponent, canActivate: [AuthGuardService] }
]);
