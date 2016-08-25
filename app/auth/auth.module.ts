import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './auth.routing';

import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { RecoverComponent } from './recover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        RecoverComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }



