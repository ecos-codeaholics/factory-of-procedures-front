import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { RecoverComponent } from './recover.component';
import { FunctionaryRecoverComponent } from './functionaryRecover.component';
import { FunctionaryLoginComponent } from './functionaryLogin.component';

export const routing = RouterModule.forChild([
    {
        path: 'acceder',
        component: LoginComponent
    },
    {
        path: 'registrar',
        component: SignupComponent
    },
    {
        path: 'recuperar',
        component: RecoverComponent
    },
    {
        path: 'funcionarios',
        component: FunctionaryLoginComponent
    }
    ,
    {
        path: 'funcionarios/recuperar',
        component: FunctionaryRecoverComponent
    }

]);
