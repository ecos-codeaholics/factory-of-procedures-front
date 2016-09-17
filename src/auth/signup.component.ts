import { Component, Input, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Citizen } from '../citizen/citizen';

declare var jQuery: any;

@Component({
    selector: 'signup-form',
    templateUrl: 'src/auth/templates/signup.component.html',
})

export class SignupComponent implements OnInit {

    //@Input() user: User;

    title = 'Registro de Ciudadano';
    citizen = new Citizen('', NaN, '', '', '', '', '', '');
    response: any;
    error: any;
    private uploadFile: any;
    private uploadProgress: number = 0;
    private uploadResponse: any = {};
    private zone: NgZone;
    private basicOptions: Object;

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

    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: 'http://157.253.221.157:4567/upload',
            calculateSpeed: false,
            filterExtensions: true,
            allowedExtensions: ['image/png', 'image/jpg'],
            autoUpload: true
        };
    }

    handleUpload(data: any): void {
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
