import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CitizenDetailComponent } from './citizen-detail.component';
import { Citizen } from './citizen';
import { CitizenService } from './citizen.service';

@Component({
    selector: 'citizen-list',
    templateUrl: 'app/citizen/templates/citizen-list.component.html',
    directives: [CitizenDetailComponent]
})

export class CitizenListComponent implements OnInit {

    title = "Lista de ciudadanos";

    citizens: Citizen[];
    selectedCitizen: Citizen;

    error: any;

    constructor(
        private citizenService: CitizenService,
        private router: Router
    ) { }

    onSelect(citizen: Citizen) {
        this.selectedCitizen = citizen;
    }

    viewDetail() {
        this.router.navigate(['/citizens/detail', this.selectedCitizen.identification])
    }

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
