import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user/user.service';
import { UsersComponent} from './user/users.component';
import { UserFormComponent } from './user/user-form.component';

@Component({
	selector: 'app',
	templateUrl: 'app/templates/app.component.html',
	directives: [UsersComponent, UserFormComponent, ROUTER_DIRECTIVES],
	providers: [UserService]
	//precompile: [UsersComponent, UserFormComponent]
})

export class AppComponent {
       title = 'Fábrica de trámites';
}