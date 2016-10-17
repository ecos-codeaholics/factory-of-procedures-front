import { RouterModule } from '@angular/router';

import { ProcedureListComponent } from './procedure-list.component';
import { ProcedureFormComponent } from './procedure-form.component';
import { ProcedureAssignedComponent } from './procedure-assigned.component';
import { ProcedurePendingComponent } from './procedure-pending.component';
import { ProcedureBuilderComponent } from './procedure-builder.component';

import { AuthGuardService } from '../auth/auth-guard.service';


export const routing = RouterModule.forChild([
    { path: '', component: ProcedureListComponent, canActivate: [AuthGuardService] },
    { path: 'funcionarioss', component: ProcedureAssignedComponent, canActivate: [AuthGuardService] },
    { path: 'pendientes', component: ProcedurePendingComponent /*, canActivate: [AuthGuardService]*/ },
    { path: 'edit/:id', component: ProcedureFormComponent, canActivate: [AuthGuardService] },
    { path: 'iniciar', component: ProcedureBuilderComponent, canActivate: [AuthGuardService] }
]);
