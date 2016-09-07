import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './auth.routing';
import { AuthService } from './auth.service';
import { ErrorHandler } from '../shared/error-handler';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';
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
        RecoverComponent,
        UPLOAD_DIRECTIVES
    ],
    providers: [
        AuthService,
        ErrorHandler,
    ],
    exports: [
        LoginComponent,
        SignupComponent,
        RecoverComponent,
        UPLOAD_DIRECTIVES
    ]
})

export class AuthModule { }



