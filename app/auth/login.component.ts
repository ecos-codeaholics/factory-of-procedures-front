import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { Login } from './login';

@Component({
    selector: 'user-login',
    templateUrl: 'app/templates/login.component.html',
})

export class LoginComponent {

    title = 'Acceso de usuario';

    user = new Login('', '');

    error: any;

    constructor(private authService: AuthService) { }

    doLogin(user: Login) {
        this.authService
            .doLogin(this.user)
            .then(user => {
                this.user = user;
            })
            .catch(error => this.error = error);
    }

    get diagnostic() { return JSON.stringify(this.user); }
}
