import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupFormComponent } from './signup-form.component';
// TODO: rc5, change component name and location to more
// general definition
import { CitizenRecoverComponent } from '../citizen/citizen-recover.component';


export const routing = RouterModule.forChild([
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupFormComponent
    },
    {
        path: 'recover',
        component: CitizenRecoverComponent
    }
]);
