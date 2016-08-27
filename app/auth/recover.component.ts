import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

import {Login} from "./login";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'recover-form',
    templateUrl: 'app/templates/recover.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class RecoverComponent {

    //@Input() user: User;

    title = 'Recuperar Constraseña';

    error: any;

    login = new Login("","","");

    constructor(private authService: AuthService, private router: Router) { }

    submitted = false;


    resetPassword(login: Login) {
        this.authService
            .resetPassword(this.login)
            .subscribe(
                (res) => {
                    console.log(res.json());
                    this.router.navigate(['login']);
                },
                error => {
                    console.log("ERROR:", error.text());
                });
    }

    get diagnostic() { return JSON.stringify(this.login); }

}

