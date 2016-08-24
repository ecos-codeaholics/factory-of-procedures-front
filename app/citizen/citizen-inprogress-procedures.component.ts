import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CitizenDetailComponent } from './citizen-detail.component';
import { Citizen } from './citizen';
import { CitizenService } from './citizen.service';

import { Procedure } from '../procedure/procedure';
import { ProcedureService } from '../procedure/procedure.service';

@Component({
    selector: 'citizens-inprogress',
    templateUrl: 'app/citizen/templates/citizen-inprogress-procedures.component.html',
    providers: [ ProcedureService ]
    //directives: [CitizenDetailComponent]
})

export class CitizenInProgressProceduresComponent implements OnInit {

    title = "Tramites en curso";

    procedures:Procedure[];
    citizens: Citizen[];
    selectedCitizen: Citizen;

     mode = 'Observable'
    
    error: any;

    errorMessage: string;
    
    constructor(
        private citizenService: CitizenService,
        private router: Router,
        private procedureService: ProcedureService
    ) { }

   /* onSelect(citizen: Citizen) {
        this.selectedCitizen = citizen;
    }

    viewDetail() {
        this.router.navigate(['/citizens/detail', this.selectedCitizen.identification])
    }
*/
    
    getInProgrssProcedures() {
        
        this.procedureService.getProcedures().subscribe(
            procedures => this.procedures=procedures,
           error =>  this.errorMessage = <any>error
            );
        /*this.procedureService.getHistProcedures().subscribe(
            procedures => this.procedures=procedures,
           error =>  this.errorMessage = <any>error
            );*/
    }
    

    ngOnInit() {
        this.getInProgrssProcedures();
    }
}
