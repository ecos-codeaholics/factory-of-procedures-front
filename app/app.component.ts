import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user/user.service';
import { UsersComponent } from './user/users.component';
import { UserFormComponent } from './user/user-form.component';
import { UserLoginComponent } from './user/user-login.component';
//import './rxjs-extensions';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [UsersComponent, UserFormComponent, UserLoginComponent, ROUTER_DIRECTIVES],
    providers: [UserService],
    precompile: [UserFormComponent, UsersComponent]
})

export class AppComponent {
    title = 'Fábrica de trámites';
}
