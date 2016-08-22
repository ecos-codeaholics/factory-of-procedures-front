import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { Login } from './login';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'user-login',
    templateUrl: 'app/templates/login.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

    title = 'Acceso de usuario';

    user = new Login('', '');

    error: any;

    constructor(private authService: AuthService) { }

    doLogin(user: Login) {

        this.authService
            .doLogin(this.user)
            .subscribe(
            (res) => {
                localStorage.setItem('id_token', res.json().id_token);
                console.log(res.json().id_token);

            },
            error => {
                console.log("ERROR:", error.text());
            });
    }


    get diagnostic() { return JSON.stringify(this.user); }

}
