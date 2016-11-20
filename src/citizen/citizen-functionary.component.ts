import {Component, OnInit} from '@angular/core';

import {CitizenService} from './citizen.service';
import {Citizen} from './citizen';


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

    constructor(private citizenService: CitizenService) {
    }

    getCities() {
        this.citizenService.getCitizenslist().subscribe(
            citizens => this.citizens = citizens,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.getCities();
    }
}
