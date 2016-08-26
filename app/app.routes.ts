import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, canActivate: [AuthGuardService],
    },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module',
    },
    {
        path: 'procedures',
        loadChildren: 'app/procedure/procedure.module',
    },
    {
        path: 'citizens',
        loadChildren: 'app/citizen/citizen.module',
    }
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
