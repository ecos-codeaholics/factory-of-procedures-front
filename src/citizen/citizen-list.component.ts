import { Component, OnInit } from '@angular/core';

import { CitizenService } from './citizen.service';
import { Citizen } from './citizen';

@Component({
    selector: 'citizen-list',
    templateUrl: 'src/citizen/templates/citizen-list.component.html'
})

export class CitizenListComponent implements OnInit {

    title = "Lista de ciudadanos";

    citizens: Citizen[];
    selectedCitizen: Citizen;

    error: any;

    constructor(
        private citizenService: CitizenService
        //private router: routing?
    ) { }

    onSelect(citizen: Citizen) {
        this.selectedCitizen = citizen;
    }

    //viewDetail() {
    //    this.router.navigate(['/citizens/detail', this.selectedCitizen.identification])
    //}

    getCitizens() {
        this.citizenService
            .getCitizens()
            .subscribe(
            citizens => this.citizens = JSON.parse(citizens)
            );
    }

    ngOnInit() {
        this.getCitizens();
    }
}
