/*
* SCC
*/
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';
import { AuthService } from '../auth/auth.service';
import { RequiredUpload } from './model/required-upload';
import { Procedure } from './model/procedure';
import { FieldService } from "../builder/field.service";



@Component({
    selector: 'procedure-builder',
    templateUrl: 'src/procedure/templates/procedure-builder.component.html'
})

export class ProcedureBuilderComponent {


    title = 'Iniciar Trámite';

    private state: any;
    private mayoralty: any;
    private procedure: Procedure;
    private procedureName: any;
    private req: RequiredUpload;
    private fields: any[];


    public isAuth: boolean;
    public profile: string;


    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private procedureService: ProcedureService,
        private service: FieldService) {

        this.fields = service.getFields();

        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }
    }
    private getModelProcedure() {
        this.procedureService.getModelProcedure(this.state, this.mayoralty, this.procedureName).subscribe(
            (procedure) => {
                this.procedure = procedure;
            }
        )
    }
    private getRequiredUpload() {
        console.log(this.procedure);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.state = params['state'];
            this.mayoralty = params['mayoralty'];
            this.procedureName = params['procedure'];
        });
        this.getModelProcedure();
        this.getRequiredUpload()

    }
}
