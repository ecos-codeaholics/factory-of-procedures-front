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

    title = 'Perfil del ciudadano';

    citizen = new Citizen('', 1, '', '', '', '', '', '');

    error: any;

    constructor(private citizenService: CitizenService) { }

    submitted = false;

    get diagnostic() { return JSON.stringify(this.citizen); }

}
