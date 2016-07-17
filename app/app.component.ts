import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user.service';
import { UsersComponent} from './users.component';

@Component({
	selector: 'app',
	templateUrl: 'app/templates/app.component.html',
	directives: [UsersComponent, ROUTER_DIRECTIVES],
	providers: [UserService]
})

export class AppComponent {
       title = 'Fábrica de trámites';
}