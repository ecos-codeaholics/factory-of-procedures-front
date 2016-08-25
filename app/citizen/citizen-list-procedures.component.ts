import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CitizenDetailComponent } from './citizen-detail.component';
import { Citizen } from './citizen';
import { CitizenService } from './citizen.service';

@Component({
    selector: 'citizen-hist',
    templateUrl: 'app/citizen/templates/citizen-list-procedures.component.html',
    directives: [CitizenDetailComponent]
})

export class CitizenListProceduresComponent {

    title = "Historico de tramites";

    citizens: Citizen[];
    selectedCitizen: Citizen;

    error: any;

    constructor(
        private citizenService: CitizenService,
        private router: Router
    ) { }

   /* onSelect(citizen: Citizen) {
        this.selectedCitizen = citizen;
    }

    viewDetail() {
        this.router.navigate(['/citizens/detail', this.selectedCitizen.identification])
    }
*/

    ngOnInit() {
    }
}
