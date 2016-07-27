import { provideRouter, RouterConfig } from '@angular/router';
// TODO: Procedures should be packaged in system.config file
import { ProceduresComponent } from './procedures/procedures.component';
import { ProceduresListComponent } from './procedures/procedures-list.component';
import { ProceduresNewComponent } from './procedures/procedures-new.component';

import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { LoginComponent } from './users/login.component';

const routes: RouterConfig = [
    {
        path: 'signup',
        component: UserFormComponent
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
        component: UsersComponent
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]
