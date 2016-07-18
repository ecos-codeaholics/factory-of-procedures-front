import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
	selector: 'users',
	templateUrl: 'app/templates/users.component.html'
})

export class UsersComponent implements OnInit {
       title = 'Lista de usuarios';
       users: User[];

       constructor( private userService: UserService) {}

       getUsers() {
           this.userService.getUsers().then(users => this.users = users);
       }

       ngOnInit() {
           this.getUsers();
       }
};