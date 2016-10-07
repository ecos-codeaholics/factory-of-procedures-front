import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcedureAttachment } from './procedure-attachment';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from './procedure.service';

@Component({
    selector: 'procedure-form',
    templateUrl: 'src/procedure/templates/procedure-form.component.html',
    //providers: [ProcedureService]
})



export class ProcedureFormComponent {
    id: any;
    idTramite: any;
    deliveryDocs = [];


    constructor(
        private route: ActivatedRoute,
        private procedureService: ProcedureService
    ) {
        this.deliveryDocs = procedureService.getdeliveryDocs();
    }

    title = 'Detalle De Trámite';
    file = new ProcedureAttachment('');

    getdeliveryDocs() {
       // this.deliveryDocs = this.procedureService.getdeliveryDocs(this.id);
        console.log(this.deliveryDocs);
    }

    ngOnInit() {
        //this.idTramite = this.route.snapshot.params.;
        this.idTramite = this.route.params.subscribe(params => this.id = +params['id']);
        console.log("radicado: " + this.id);
        //this.getdeliveryDocs();

        //        this.route.params
        //            .map(params => params['id'])
        //            .subscribe((id) => { this.idTramite });
    }

    ngOnDestroy() {
        this.idTramite.unsubscribe();
    }
}

