import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupFormComponent } from './signup-form.component';

export const routing = RouterModule.forChild([
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupFormComponent
    },
]);
