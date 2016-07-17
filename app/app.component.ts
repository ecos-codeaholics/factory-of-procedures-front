import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UsersComponent} from './users.component';

@Component({
	selector: 'app',
	templateUrl: 'app/templates/app.component.html',
	directives: [UsersComponent],
	providers: [UserService]
})

export class AppComponent {
       title = 'Fábrica de trámites';
}