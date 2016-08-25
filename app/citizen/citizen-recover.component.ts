import { Component, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { Citizen } from './citizen';

@Component({
    selector: 'citizen-recover',
    templateUrl: 'app/citizen/templates/citizen-recover.component.html',
    providers: [AuthService]
})

export class CitizenRecoverComponent {

    //@Input() user: User;

    title = 'Recuperar Constraseña';

    error: any;

    constructor(private authService: AuthService) { }

    submitted = false;


    //get diagnostic() { return JSON.stringify(this.citizen); }

}

