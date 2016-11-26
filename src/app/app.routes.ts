import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../home/dashboard.component';
import { TeamComponent } from '../home/team.component';
import { ContactComponent } from '../home/contact.component';
import { FactoryComponent } from '../home/factory.component';
import { FactoryTermsComponent } from '../home/factory-terms.component';

import { DynamicFormComponent } from '../builder/dynamic-form.component';
import { LoginComponent } from '../auth/login.component';
import { FunctionaryLoginComponent } from '../auth/functionaryLogin.component';

import { AuthGuardService } from '../auth/auth-guard.service';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'equipo',
        component: TeamComponent
    },
    {
        path: 'contacto',
        component: ContactComponent
    },
    {
        path: 'fábrica',
        component: FactoryComponent
    },
    {
        path: 'términos-y-condiciones',
        component: FactoryTermsComponent
    },
    {
        path: 'auth',
        loadChildren: 'src/auth/auth.module',
    },
    {
        path: 'tramites',
        loadChildren: 'src/procedure/procedure.module',
    },
    {
        path: 'citizens',
        loadChildren: 'src/citizen/citizen.module',
    }
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
