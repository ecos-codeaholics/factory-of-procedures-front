import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, //canActivate: [AuthGuard],
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
