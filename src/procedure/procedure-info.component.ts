import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';

import { ProcedureRequest } from "./model/procedure-request";
import { ProcedureData } from "./model/procedure-data";
import { Citizen } from '../citizen/citizen';

@Component({
    selector: 'procedure-info',
    templateUrl: 'src/procedure/templates/procedure-info.component.html',

})

export class ProcedureInfoComponent {

    title: string = "Informacion del Tramite";

    @Input('procedure') procedure: ProcedureRequest;
    @Input('profile') profile: string;

    constructor() { }


    keys(object: {}) {
        //checking undefined object from the request
        if ((object === undefined) || (object === null)) {
            return object;
        }
        //return key and values of the object
        return Object.keys(object);
    }

}




