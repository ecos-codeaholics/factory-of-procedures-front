import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home.component';
import { CitizenHomeComponent } from './citizen/citizen-home.component';
import { CitizenService } from './citizen/citizen.service';
import { CitizenFormComponent } from './citizen/citizen-form.component';
import { RecoverComponent } from './auth/recover.component';
import { LoginComponent } from './auth/login.component';
import { AuthService } from './auth/auth.service';
import { ProcedureHomeComponent } from './procedure/procedure-home.component';
//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [CitizenHomeComponent, CitizenFormComponent, RecoverComponent, LoginComponent, ROUTER_DIRECTIVES],
    providers: [CitizenService, AuthService],
    precompile: [HomeComponent, CitizenHomeComponent, CitizenFormComponent , RecoverComponent, LoginComponent, ProcedureHomeComponent]
})

export class AppComponent {
    title = 'Fábrica de Trámites';
}

