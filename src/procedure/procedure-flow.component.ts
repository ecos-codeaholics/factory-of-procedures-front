import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';
import { Step } from './model/step';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent implements OnInit {

    title = 'Aca va al nombre del trámite';
    public steps: Step;
    public fileNumber: number;

    @Input('profile') profile: string;
    @Input('procedure') procedure: ProcedureRequest;

    constructor(
        private procedureService: ProcedureService
    ) { }

    getSteps() {
        // FIXME: Steps should be really an array of documents
        this.steps = this.procedure[0]["steps"];
    }

    doStepApproval(check) {
        status = status ? "Finalizado" : "En curso";
        console.log(status);
        this.procedureService.doStepApproval(status, this.fileNumber)
            .subscribe(
            (res) => {
                console.log("verificado");
                console.log(res)
            })
    }

    ngOnInit() {
        this.getSteps();
        this.fileNumber = this.procedure[0].fileNumber
    }
}
