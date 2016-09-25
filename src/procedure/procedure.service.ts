import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProcedureAttachment } from './procedure-attachment';

import { Procedure } from './procedure';

import { API_URL } from '../shared/constant/api-url';
import { ErrorHandler } from '../shared/error-handler';

import { AuthGuardService } from '../auth/auth-guard.service';

@Injectable()
export class ProcedureService {
        
    constructor(
        public errorHandler: ErrorHandler,
        public http: Http,
         public apiUrl: API_URL,
         public authGuardService:AuthGuardService
    ) { }

    getProcedures(): Observable<Procedure[]> {
         return this.http.get(this.apiUrl.PROCEDURES())
            .map((r: Response) => r.json().data as Procedure[])
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }
    getAssignedProcedures(): Observable<Procedure[]> {
        return this.http.get(this.apiUrl.FUNCTIONARIES()+"procedures/?email="+this.authGuardService.getUser())
            .map(
                //this.extractData
                (r: Response) => r.json() as Procedure[]
                )
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }
}
