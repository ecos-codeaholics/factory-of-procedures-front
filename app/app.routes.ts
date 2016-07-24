import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './user/users.component';
import { UserFormComponent } from './user/user-form.component';
import { UserLoginComponent } from './user/user-login.component';

const routes: RouterConfig = [
    {
        path: 'signup',
        component: UserFormComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]
