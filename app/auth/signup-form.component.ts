import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';

import { Citizen } from '../citizen/citizen';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/templates/signup-form.component.html'
})

export class SignupFormComponent {

    //@Input() user: User;

    title = 'Registro de Ciudadano';

    citizen = new Citizen('', 1, '', '', '', '', '', '');

    error: any;

    constructor(private authService: AuthService) { }

    submitted = false;

    newCitizen(citizen: Citizen) {
        this.authService
            .newCitizen(this.citizen)
            .then(citizen => {
                this.citizen = citizen;
            })
            .catch(error => this.error = error);
    }

    get diagnostic() { return JSON.stringify(this.citizen); }

}
