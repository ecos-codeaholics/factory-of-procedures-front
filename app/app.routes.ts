import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './user/users.component';
import { UserFormComponent } from './user/user-form.component';
import { LoginComponent } from './user/login.component';

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
        path: 'users',
        component: UsersComponent
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]
