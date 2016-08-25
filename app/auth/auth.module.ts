import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './auth.routing';

import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { SignupFormComponent } from './signup-form.component';
// TODO: rc5, change component name and location to more
// general definition
import { CitizenRecoverComponent } from '../citizen/citizen-recover.component';


//import { CitizenFormComponent } from '../citizen/citizen-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        LoginComponent,
        SignupFormComponent,
        CitizenRecoverComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }



