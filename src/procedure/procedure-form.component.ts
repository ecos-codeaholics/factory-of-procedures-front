import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html'
})



export class ProcedureFormComponent {
    id: any;
    idTramite : any;


    constructor(private route: ActivatedRoute) {

    }

    title = 'Detalle De Trámite';
    file = new ProcedureAttachment('');

    ngOnInit(){
        //this.idTramite = this.route.snapshot.params.;
        this.idTramite = this.route.params.subscribe(params => this.id = +params['id']);
        console.log("radicado: "+this.id);


        //        this.route.params
//            .map(params => params['id'])
//            .subscribe((id) => { this.idTramite });
    }

    ngOnDestroy() {
        this.idTramite.unsubscribe();
    }
}

