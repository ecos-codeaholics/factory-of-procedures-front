import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Login } from './login';

@Component({
    selector: 'login-form',
    templateUrl: 'app/auth/templates/login.component.html',
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
