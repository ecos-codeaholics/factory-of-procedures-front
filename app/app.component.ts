import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './users/user.service';
import { LoginService } from './users/login.service';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { LoginComponent } from './users/login.component';
import { ProceduresComponent } from './procedures/procedures.component';
//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [UsersComponent, UserFormComponent, LoginComponent, ROUTER_DIRECTIVES],
    providers: [UserService, LoginService],
    precompile: [UserFormComponent, UsersComponent, LoginComponent, ProceduresComponent]
})

export class AppComponent {
    title = 'Fábrica de trámites';
}
