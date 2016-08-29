import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Login } from './login';

@Component({
    selector: 'login-form',
    templateUrl: 'src/auth/templates/login.component.html',
})

export class LoginComponent {

    title = 'Acceso de usuario';

    user = new Login('', '');

    error: any;

    constructor(
        private authService: AuthService,
        private router: Router

    ) { }

    doLogin(user: Login) {

        this.authService
            .doLogin(this.user)
            .subscribe(
            (res) => {
                localStorage.setItem('id_token', res.json().id_token);
                console.log(res.json().id_token);
                this.router.navigate(['/']);

            },
            error => {
                console.log("ERROR:", error.text());
            });
    }

    get diagnostic() { return JSON.stringify(this.user); }

}
