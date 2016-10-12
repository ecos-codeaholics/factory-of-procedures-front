import { Component, OnInit, Input } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { Procedure } from './model/procedure';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'procedure-flow',
    templateUrl: 'src/procedure/templates/procedure-flow.component.html'
})

export class ProcedureFlowComponent {

    title = 'Aca va al nombre del trámite';
    
    public isAuth: boolean;
    public user: string;
    public profile: string;
    public status: boolean;

    @Input('procedures') procedures: Procedure[];

    constructor(
        private authService: AuthService
        ) {
        
        console.log("procedure-flow> constructor");
        this.isAuth = authService.isAuth();

        if (this.isAuth) {

            this.profile = authService.getProfile();
        }


    }

    getAuthStatus() {

        this.authService.getAuthStatus().subscribe(

            (status: boolean) => {
                this.isAuth = status;
            }
        );
        console.log("procedure-list> getAuthStatus " + this.isAuth);
        return this.isAuth;
    }

    getFunctionaryProdecureByID() {

    }

}
