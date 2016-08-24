import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './auth.routing';

import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { SignupFormComponent } from './signup-form.component';

//import { CitizenFormComponent } from '../citizen/citizen-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        LoginComponent,
        SignupFormComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }



