import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
// TODO: Procedures should be packaged in system.config file
import { ProceduresComponent } from './procedures/procedures.component';
import { ProceduresListComponent } from './procedures/procedures-list.component';
import { ProceduresNewComponent } from './procedures/procedures-new.component';

import { UsersComponent } from './users/users.component';
import { UsersNewComponent } from './users/users-new.component';
import { UsersListComponent } from './users/users-list.component';
import { UsersDetailComponent } from './users/users-detail.component';
import { LoginComponent } from './auth/login.component';

const routes: RouterConfig = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: UsersNewComponent
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
        path: 'users',
        component: UsersComponent,
        children: [
            { path: '', component: UsersListComponent },
            { path: 'new', component: UsersNewComponent },
            { path: 'detail/:id', component: UsersDetailComponent }
        ]
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]
