import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProcedureAttachment } from './procedure-attachment';

import { Procedure } from './procedure';

import { API_URL } from '../shared/constant/api-url';
import { ErrorHandler } from '../shared/error-handler';

@Injectable()
export class ProcedureService {

    private fileUploadUrl = '127.0.0.1/procedures/documents/upload';
    private proceduresUrl = 'src/procedure/procedures.json';

    constructor(
        public errorHandler: ErrorHandler,
        public http: Http,
         public apiUrl: API_URL
    ) { }

    getProcedures(): Observable<Procedure[]> {
         return this.http.get(this.apiUrl.PROCEDURES())
            .map((r: Response) => r.json().data as Procedure[])
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }
}
