import { Component } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'app',
	templateUrl: 'app/templates/app.component.html',
})

export class AppComponent {
       title = 'Fábrica de Trámites';
       user: User = {
       id: 1,
	     name: 'Foobian'};
};