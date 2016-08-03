import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import { UsersNewComponent } from './users/users-new.component';
import { LoginComponent } from './auth/login.component';
import { AuthService } from './auth/auth.service';
import { ProceduresComponent } from './procedures/procedures.component';
//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [UsersComponent, UsersNewComponent, LoginComponent, ROUTER_DIRECTIVES],
    providers: [UserService, AuthService],
    precompile: [HomeComponent, UsersNewComponent, UsersComponent, LoginComponent, ProceduresComponent]
})

export class AppComponent {
    title = 'Fábrica de trámites';
}

