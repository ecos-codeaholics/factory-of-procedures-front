import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
// TODO: Procedures should be packaged in system.config file
import { ProceduresComponent } from './procedures/procedures.component';
import { ProceduresListComponent } from './procedures/procedures-list.component';
import { ProceduresNewComponent } from './procedures/procedures-new.component';


import { CitizenHomeComponent } from './citizen/citizen-home.component';
import { CitizenFormComponent } from './citizen/citizen-form.component';
import { CitizenListComponent } from './citizen/citizen-list.component';
import { CitizenDetailComponent } from './citizen/citizen-detail.component';
import { CitizenListProceduresComponent } from './citizen/citizen-list-procedures.component';
import { CitizenInProgressProceduresComponent } from './citizen/citizen-inprogress-procedures.component';

import { LoginComponent } from './auth/login.component';

const routes: RouterConfig = [
    {
        path: '',
        component: HomeComponent
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
        component: ProceduresComponent,
        children: [
            { path: '', component: ProceduresListComponent },
            { path: 'new', component: ProceduresNewComponent }
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
