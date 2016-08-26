import { RouterModule } from '@angular/router';

import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';

import { AuthGuardService } from '../auth/auth-guard.service';


export const routing = RouterModule.forChild([

    { path: '', component: CitizenListComponent, canActivate: [AuthGuardService] },
    { path: 'edit', component: CitizenFormComponent, canActivate: [AuthGuardService] },
    { path: 'detail/:id', component: CitizenDetailComponent, canActivate: [AuthGuardService] }
]);
