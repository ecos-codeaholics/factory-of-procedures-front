import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProcedureAttachment } from './procedure-attachment';

import { API_URL } from '../shared/constant/api-url';
import { ErrorHandler } from '../shared/error-handler';
import { AuthService } from '../auth/auth.service';

import { Procedure } from './procedure';
import { Mayoralty } from './mayoralty';

@Injectable()
export class ProcedureService {

    constructor(

        public errorHandler: ErrorHandler,
        public http: Http,
        public apiUrl: API_URL,
        public authService: AuthService
    ) { }

    getProcedures(): Observable<Procedure[]> {
        return this.http.get(this.apiUrl.CITIZENS() + "procedures/?email=" + this.authService.getUser())
            .map((r: Response) => r.json() as Procedure[])
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }

    getProcedures2(): Observable<Procedure[]> {

        return this.http.get(this.apiUrl.CITIZENS() + "procedures2/?email=" + this.authService.getUser())
            .map((r: Response) => r.json() as Procedure[])
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }

    getMayoralties(): Observable<Mayoralty[]> {

        return this.http.get(this.apiUrl.CITIZENS() + "mayoralties/?email=" + this.authService.getUser())
            .map((r: Response) => r.json() as Mayoralty[])
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }

    getAssignedProcedures(): Observable<Procedure[]> {
        return this.http.get(this.apiUrl.FUNCTIONARIES() + "procedures/?email=" + this.authService.getUser())
            .map(
            (r: Response) => r.json() as Procedure[]
            )
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }
    getIdProcedures(): Observable<Procedure[]> {
        return this.http.get(this.apiUrl.FUNCTIONARIES() + "procedures/?email=" + this.authService.getUser())
            .map(
            (r: Response) => r.json() as Procedure[]
            )
            .catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            });
    }
}
