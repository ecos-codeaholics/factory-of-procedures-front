import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProcedureAttachment } from './procedure-attachment';

import { Procedure } from './procedure';
import { PROCEDURES } from './mock-procedure';

import { API_URL } from '../shared/constant/api-url';
import { ErrorHandler } from '../shared/error-handler';

@Injectable()
export class ProcedureService {

    private fileUploadUrl = '127.0.0.1/procedures/documents/upload';

    constructor(
        public errorHandler: ErrorHandler,
        public http: Http
    ) { }

    getProcedures(): Observable<Procedure[]> {
        //  return PROCEDURES;

        return this.http.get(API_URL.PROCEDURES)
            .map((r: Response) => r.json().data as Procedure[]);
          /* .catch((res) => {
                console.log("ERROR: en  auth.service");
                Observable.throw(this.errorHandler.check(res));
            })*/
 
          

       // return this.http.request(API_URL.PROCEDURES)
     //       .map(res => res.json());
    }
    
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("Esto es un error:  " + errMsg);

        return Observable.throw(errMsg);
    }
    
    /*{
    "data":[
        {   "id": 1, name: "sebas", department: "Caldas"        ,   city: "Palestina"   , status: "ongoing"},
        {   "id": 2, name: "Jeison",    department: "Cundinamarca"  ,   city: "Palestina"   , status: "all"}
    ]
}*/

}
