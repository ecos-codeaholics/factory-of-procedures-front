import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { CitizenService } from './citizen.service';

import { Citizen } from './citizen';

@Component({
    selector: 'citizen-form',
    templateUrl: 'app/citizen/templates/citizen-form.component.html'
})

export class CitizenFormComponent {

    //@Input() user: User;

    title = 'Registro de Ciudadano';

    citizen = new Citizen('', 1, '', '', '', '', '', '');

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

