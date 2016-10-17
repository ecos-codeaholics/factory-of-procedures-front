import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';
import { Activity } from './model/activity';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent implements OnInit {

    title = 'Aca va al nombre del trámite';
    public activities: Array<Activity>;
    public activity: Activity;
    public checkedStatus: string;
    public fileNumber: number;
    public msg: string;

    @Input('profile') profile: string;
    @Input('procedure') procedure: ProcedureRequest;

    constructor(
        private procedureService: ProcedureService
    ) { }

    getSteps() {
        this.activities = this.procedure[0]["activities"];
    }

    doStepApproval(check, activity) {
        this.activity = activity;
        status = status ? "Finalizado" : "En curso";

        this.procedureService.doStepApproval(status, this.fileNumber, this.activity.step)
            .subscribe(
            (res) => {
                this.activity.status = res.responseMsg;
                this.changeCheckedStatus(this.activity.status);
            },
            () => {
                this.msg = "El registro ha sido actualizado";
            })
    }

    // FIXME: Review this behavior
    changeCheckedStatus(status) {

        if (status === "Finalizado") {
            this.checkedStatus === ""
        } else if (status == "En curso") {
            this.checkedStatus === "checked"
        }
    }

    ngOnInit() {
        this.getSteps();
        this.fileNumber = this.procedure[0].fileNumber
    }
}
