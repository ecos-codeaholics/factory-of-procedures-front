import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './auth.routing';

import { AuthService } from './auth.service';
import { ErrorHandler } from '../shared/error-handler';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { RecoverComponent } from './recover.component';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        RecoverComponent
    ],
    providers: [
        AuthService,
        ErrorHandler,
    ],
    exports: [
        LoginComponent,
        SignupComponent,
        RecoverComponent
    ]
})

export class AuthModule { }



