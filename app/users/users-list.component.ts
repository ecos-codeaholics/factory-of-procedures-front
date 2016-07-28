import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersDetailComponent } from './users-detail.component';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/templates/users-list.component.html',
    directives: [UsersDetailComponent]
})

export class UsersListComponent implements OnInit {

    title = "Lista de usuarios";

    users: User[];
    selectedUser: User;

    error: any;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    onSelect(user: User) {
        this.selectedUser = user;
    }

    viewDetail() {
        this.router.navigate(['/users/detail', this.selectedUser.identification])
    }

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
