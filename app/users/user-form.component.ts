import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';

import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'app/templates/user-form.component.html'
})

export class UserFormComponent {

    //@Input() user: User;

    title = 'Registro de usuario';

    roles = ['Administrador', 'Funcionario', 'Ciudadano'];

    user = new User(1, 'foo', 'bar', 'foo@bar', '123456', 'rol');

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

