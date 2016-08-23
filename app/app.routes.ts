import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
// TODO: Procedures should be packaged in system.config file

// Procedure Feature
import { ProcedureHomeComponent } from './procedure/procedure-home.component';
import { ProcedureListComponent } from './procedure/procedure-list.component';
import { ProcedureFormComponent } from './procedure/procedure-form.component';

// Citizen Feature
import { CitizenHomeComponent } from './citizen/citizen-home.component';
import { CitizenFormComponent } from './citizen/citizen-form.component';
import { CitizenListComponent } from './citizen/citizen-list.component';
import { CitizenDetailComponent } from './citizen/citizen-detail.component';
import { LoginComponent } from './auth/login.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: CitizenFormComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'procedures',
        component: ProcedureHomeComponent,
        children: [
            { path: '', component: ProcedureListComponent },
            { path: 'edit', component: ProcedureFormComponent }
        ]
    },
    {
        path: 'citizens',
        component: CitizenHomeComponent,
        children: [
            { path: '', component: CitizenListComponent },
            { path: 'edit', component: CitizenFormComponent },
            { path: 'detail/:id', component: CitizenDetailComponent }
        ]
    }
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
