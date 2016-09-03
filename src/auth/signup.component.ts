import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Citizen } from '../citizen/citizen';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';

declare var jQuery: any;

@Component({
    selector: 'signup-form',
    templateUrl: 'src/auth/templates/signup.component.html',
    directives: [UPLOAD_DIRECTIVES],
})

export class SignupComponent {

    //@Input() user: User;

    title = 'Registro de Ciudadano';

    citizen = new Citizen('', NaN, '', '', '', '', '', '');
    response: any;

    error: any;

    uploadFile: any;
    options: Object = {
        url: 'http://localhost:4567/citizens/upload'
    };

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

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
                this.router.navigate(['/login']);

            },
            (error) => {

                this.error = error;
                console.log(this.error);
            });
    }

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }

    get diagnostic() { return JSON.stringify(this.citizen); }
}
