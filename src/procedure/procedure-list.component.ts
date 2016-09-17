import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './procedure';

@Component({
    selector: 'procedure-list',
    //inputs: ['status'],
    templateUrl: 'src/procedure/templates/procedure-list.component.html'
})

export class ProcedureListComponent implements OnInit {

    procedures: Procedure[];

 //   @Input() status;

    constructor(
        private procedureService: ProcedureService
    ) { }

    // TODO: Should implement pipe transformation to
    // filter procedures as historic or ongoing
    getProcedures() {
        this.procedureService.getProcedures().subscribe(
        procedures => this.procedures=procedures,
           error =>  this.errorMessage = <any>error
            );
            /*(res) => {
                
                this.procedures = res.data;
                console.log("Estoy en procedure-list");
                console.log(this.procedures[0].id);
                */
            
        
    }

    filterHistoric(event) {
        event.preventDefault();
        console.log("Getting historic procedures");
        console.log(this.procedures);
    }

    filterOngoing(event) {
        event.preventDefault();

	/**
        this.procedures.find((e) => {
            console.log(e);
            return e.status == "En curso";

        });
        console.log("Getting ongoing procedures");
	*/

    }

    ngOnInit() {

        this.getProcedures();
    }
}
