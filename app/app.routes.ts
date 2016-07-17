import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: RouterConfig = [
      {
	path: 'users',
	component: UsersComponent
      }
]

export const appRouterProviders = [
       provideRouter(routes)
]