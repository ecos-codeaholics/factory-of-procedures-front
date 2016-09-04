import { Component, Input, NgZone} from '@angular/core';
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
    uploadProgress: number;
    uploadResponse: Object;
    zone: NgZone;
    options: Object = {
        url: 'http://localhost:4567/citizens/upload'
    };

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.uploadProgress = 0;
        this.uploadResponse = {};
        this.zone = new NgZone({ enableLongStackTrace: false });
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
                this.router.navigate(['/login']);

            },
            (error) => {

                this.error = error;
                console.log(this.error);
            });
    }

    handleUpload(data): void {
        this.uploadFile = data;
        this.zone.run(() => {
            this.uploadProgress = data.progress.percent;
        });
        let resp = data.response;
        if (resp) {
            resp = JSON.parse(resp);
            this.uploadResponse = resp;
        }
    }

    get diagnostic() { return JSON.stringify(this.citizen); }
}
