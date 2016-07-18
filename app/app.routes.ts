import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

const routes: RouterConfig = [
      {
	path: 'users',
	component: UsersComponent
      },
      {
	path: 'signup',
	component: UserFormComponent
      }
]

export const appRouterProviders = [
       provideRouter(routes)
]