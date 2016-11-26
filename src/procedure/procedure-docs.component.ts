import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProcedureService} from './procedure.service';

import {ProcedureRequest} from "./model/procedure-request";

import {API_URL} from '../shared/constant/api-url';
import { ConfigService } from '../config/config.service';

@Component({
    selector: 'procedure-docs',
    templateUrl: 'src/procedure/templates/procedure-docs.component.html',

})
export class ProcedureDocsComponent implements OnInit {
    title: string = "Informacion del Tramites";
    backend: string = "localhost:4567/docs/";
    @Input('procedure') procedure: ProcedureRequest[];

    constructor(
        private procedureService: ProcedureService,
                public apiUrl: API_URL,
        config: ConfigService)
    {
        this.backend= config.get('baseUrl')+":"+config.get('port')+ '/docs/';
    }

    ngOnInit() {
        console.log( this.backend);
    }

    downloadDocs(doc: string) {
        console.log(doc);

        /*
         let thefile = {};
         this.procedureService.getDocumentProcedureRequest(doc,this.procedure[0].fileNumber)
         .subscribe(data => thefile = new Blob([data], { type: "application/octet-stream" }), //console.log(data),
         error => console.log("Error downloading the file."),
         () => console.log('Completed file download.'));

         let url = window.URL.createObjectURL(thefile);
         window.open(url);
         */

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




