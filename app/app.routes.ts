import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
// TODO: Procedures should be packaged in system.config file

// Procedure Feature
import { ProcedureHomeComponent } from './procedure/procedure-home.component';
import { ProcedureListComponent } from './procedure/procedure-list.component';
import { ProcedureFormComponent } from './procedure/procedure-form.component';

// Citizen Feature

import { CitizenHomeComponent } from './citizen/citizen-home.component';
import { CitizenFormComponent } from './citizen/citizen-form.component';
import { RecoverComponent } from './auth/recover.component';
import { CitizenListComponent } from './citizen/citizen-list.component';
import { CitizenDetailComponent } from './citizen/citizen-detail.component';
import { CitizenListProceduresComponent } from './citizen/citizen-list-procedures.component';
import { CitizenInProgressProceduresComponent } from './citizen/citizen-inprogress-procedures.component';

import { LoginComponent } from './auth/login.component';

import { AuthGuard } from './auth/auth.guard';

const routes: RouterConfig = [
    {
        path: '',
        component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: CitizenFormComponent
    },
    {
        path: 'recover',
        component: RecoverComponent
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
            { path: 'detail/:id', component: CitizenDetailComponent },
            { path: 'hist', component: CitizenListProceduresComponent }
            ,{ path: 'inprogress', component: CitizenInProgressProceduresComponent }
        ]
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]
