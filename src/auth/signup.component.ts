import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';

import { Citizen } from '../citizen/citizen';

@Component({
    selector: 'signup-form',
    templateUrl: 'src/auth/templates/signup.component.html'
})

export class SignupComponent {

    //@Input() user: User;

    title = 'Registro de Ciudadano';

    citizen = new Citizen('', NaN, '', '', '', '', '', '');

    error: any;

    constructor(private authService: AuthService) { }

    submitted = false;

    doSignup(citizen: Citizen) {

        this.authService
            .doSignup(this.citizen)
            .then(citizen => {
                this.citizen = citizen;
            })
            .catch(error => this.error = error);
    }

    get diagnostic() { return JSON.stringify(this.citizen); }

}
