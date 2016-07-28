import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';

import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'app/templates/users-new.component.html'
})

export class UsersNewComponent {

    //@Input() user: User;

    title = 'Registro de usuario';

    roles = ['Administrador', 'Funcionario', 'Ciudadano'];

    user = new User('', 1, 'foo', 'bar', 'foo@bar', '123456');

    error: any;

    constructor(private userService: UserService) { }

    submitted = false;

    newUser(user: User) {
        this.userService
            .newUser(this.user)
            .then(user => {
                this.user = user;
            })
            .catch(error => this.error = error);
    }

    get diagnostic() { return JSON.stringify(this.user); }

}

