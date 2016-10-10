import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';

import { ProcedureRequest } from "./model/procedure-request";

@Component({
    selector: 'procedure-info',
    templateUrl: 'src/procedure/templates/procedure-info.component.html',

})

export class ProcedureInfoComponent implements OnInit {
    title: string = "Informacion del Tramites";

    @Input('procedures') procedures: ProcedureRequest[];


    constructor() {

    }

    ngOnInit() {

    }


    keys(object: {}) {
        //checking undefined object from the request
        if ((object === undefined) || (object === null)) {
            return object;
        }
        //return key and values of the object
        return Object.keys(object);
    }

}




