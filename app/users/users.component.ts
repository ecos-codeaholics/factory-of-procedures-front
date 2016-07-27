import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UsersListComponent } from './users-list.component';
import { UsersNewComponent } from './users-new.component';

@Component({
    selector: 'users',
    templateUrl: 'app/templates/users.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [UsersListComponent, UsersNewComponent]
})

export class UsersComponent {

    title = 'Usuarios';
};
