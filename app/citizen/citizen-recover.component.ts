import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { CitizenService } from './citizen.service';

import { Citizen } from './citizen';

@Component({
    selector: 'citizen-recover',
    templateUrl: 'app/citizen/templates/citizen-recover.component.html'
})

export class CitizenRecoverComponent {

    //@Input() user: User;

    title = 'Recuperar Constraseña';

    citizen = new Citizen('', 1, '', '', '', '');

    error: any;

    constructor(private citizenService: CitizenService) { }

    submitted = false;

    newCitizen(citizen: Citizen) {
        this.citizenService
            .newCitizen(this.citizen)
            .then(citizen => {
                this.citizen = citizen;
            })
            .catch(error => this.error = error);
    }

    get diagnostic() { return JSON.stringify(this.citizen); }

}

