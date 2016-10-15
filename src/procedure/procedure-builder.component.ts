/*
* SCC
*/
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';
import { AuthService } from '../auth/auth.service';


@Component({
    selector: 'procedure-builder',
    templateUrl: 'src/procedure/templates/procedure-builder.component.html'
})

export class ProcedureBuilderComponent {


    title = 'Iniciar Trámite';

    private state: any;
    private mayoralty: any;
    private procedure: any;

    public isAuth: boolean;
    public profile: string;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private procedureService: ProcedureService) {

        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }
    }
    private getModelProcedure() {
        this.procedureService.getModelProcedure(this.state,this.mayoralty,this.procedure).subscribe(
            (procedure) => {
                this.procedure = procedure;
            }
        )
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.state = params['state'];
            this.mayoralty = params['mayoralty'];
            this.procedure = params['procedure'];
        });

    }
}
