import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';
import { ProcedureRequest } from './model/procedure-request';
import { Activity } from './model/activity';
import { Status } from './model/status';

import { AuthService } from '../auth/auth.service';

declare var jQuery: any;

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

    private status:Status[];
    @Input('profile') profile: string;
    @Input('procedure') procedure: ProcedureRequest;

    constructor(
        private procedureService: ProcedureService
    ) {
        this.status= [new Status("Aprobar"),new Status("Rechazar"),new Status("Anular")]
      //  this.status= ["Aprobar","Rechazar","Anular"];
        console.log(this.status);
    }

    getSteps() {
        this.activities = this.procedure[0]["activities"];
    }

    doStepApproval(check, activity) {
        this.activity = activity;
        jQuery('#modalFlow').modal('show');
       /* $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus()
        })*/
        /*this.procedureService.doStepApproval(check, this.fileNumber, this.activity.step)
            .subscribe(
            (res) => {
                this.activity.status = res.responseMsg;
                this.changeCheckedStatus(this.activity.status);
            },
            () => {
                this.msg = "El registro ha sido actualizado";
            })*/
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
       // jQuery('.modalFlow').modal('hide');
        this.getSteps();
        this.fileNumber = this.procedure[0].fileNumber
    }
}
