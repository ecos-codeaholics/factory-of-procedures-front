import { Component, Input, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';
import { ProcedureService } from '../procedure/procedure.service';

import { Citizen } from '../citizen/citizen';
import { API_URL } from '../shared/constant/api-url';



declare var jQuery: any;

@Component({
    selector: 'signup-form',
    templateUrl: 'src/auth/templates/signup.component.html',
    providers: [ProcedureService]
})

export class SignupComponent implements OnInit {

    title = 'Registro de Ciudadano';
    citizen = new Citizen('', NaN, '', '', '', '', '', '', '');

    response: any;
    error: any;
    env: string;

    private uploadFile: any;
    private uploadProgress: number = 0;
    private uploadResponse: any = {};
    private zone: NgZone;
    private basicOptions: Object;

    constructor(
        private authService: AuthService,
        private router: Router,
        private apiUrl: API_URL,
        private config: ConfigService
    ) {
        this.env = config.getEnv();
    }

    submitted = false;

    doSignup(citizen: Citizen) {

        this.authService
            .doSignup(this.citizen)
            .subscribe(
            (res) => {
                jQuery('.modal-title').html("Bienvenido");
                jQuery('.modal-body').html("Bienvenido a nuestro sistema, su registro fue exitoso.");
                jQuery('.modal').modal('show');
                this.response = res.json();
                console.log(this.response);
                this.router.navigate(['home']);

            },
            (error) => {

                this.error = error;
                console.log(this.error);
            });
    }

    ngOnInit() { }

    get diagnostic() {

        if (this.env === 'development') {
            return JSON.stringify(this.citizen);
        }
    }
}
