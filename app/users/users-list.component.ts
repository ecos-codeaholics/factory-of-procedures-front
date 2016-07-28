import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/templates/users-list.component.html'
})

export class UsersListComponent implements OnInit {

    title = "Lista de usuarios";

    users: User[];

    error: any;

    constructor(private userService: UserService) { }

    getUsers() {
        this.userService
            .getUsers()
            .subscribe(
            users => this.users = JSON.parse(users)
            );
    }

    ngOnInit() {
        this.getUsers();
    }
}
