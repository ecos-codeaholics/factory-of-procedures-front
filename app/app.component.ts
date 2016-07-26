import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user/user.service';
import { LoginService } from './user/login.service';
import { UsersComponent } from './user/users.component';
import { UserFormComponent } from './user/user-form.component';
import { LoginComponent } from './user/login.component';
//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [UsersComponent, UserFormComponent, LoginComponent, ROUTER_DIRECTIVES],
    providers: [UserService, LoginService],
    precompile: [UserFormComponent, UsersComponent, LoginComponent]
})

export class AppComponent {
    title = 'Fábrica de trámites';
}
