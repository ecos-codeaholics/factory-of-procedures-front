import {Component, OnInit} from '@angular/core';
import {CitizenService} from './citizen.service';
import {Citizen} from './citizen';
import { Router } from '@angular/router';


@Component({
    selector: 'citizen-functionary',
    templateUrl: 'src/citizen/templates/citizen-functionary.component.html',
    providers: [CitizenService]
})

export class CitizenFunctionaryComponent implements OnInit {

    title = 'Seleccione el nuevo funcionario';
    citizen: any;
    citizens: Citizen[];
    error: any;
    errorMessage: string;

    constructor(private citizenService: CitizenService,
                private router: Router) {
    }

    getCities() {
        this.citizenService.getCitizenslist().subscribe(
            citizens => this.citizens = citizens,
            error => this.errorMessage = <any>error
        );
    }

    insertFunctionary() {
        this.citizenService.createFunctionary(this.citizen).subscribe(
        (res) => {
            if (!res.json().errorInd) {
                //this.setAuthStatus(res.json());
            }
        },
        error => { },
        () => {
            this.router.navigate(['dashboard']);
            }
        );
    }

    ngOnInit() {
        this.getCities();
    }
}
