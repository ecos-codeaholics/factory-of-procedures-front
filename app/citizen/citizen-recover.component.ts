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

    error: any;

    constructor(private citizenService: CitizenService) { }

    submitted = false;


    //get diagnostic() { return JSON.stringify(this.citizen); }

}

