import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
	selector: 'app',
	templateUrl: 'app/templates/app.component.html',
	providers: [UserService],
})

export class AppComponent implements OnInit {
       title = 'Fábrica de Trámites';
       users: User[];

       constructor( private userService: UserService) {}

       getUsers() {
           this.userService.getUsers().then(users => this.users = users);
       }

       ngOnInit() {
           this.getUsers();
       }
};