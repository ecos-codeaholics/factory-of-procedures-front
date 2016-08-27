import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Login } from './login';

@Injectable()
export class AuthService {

    constructor(
        public http: Http
    ) { }
    // Uncomment this to match factory server model
    //private loginUrl = "http://127.0.0.1:4567/citizenLogin";
    private loginUrl = "http://localhost:3001/sessions/create";
    private citizensUrl = 'http://157.253.17.148:4567/citizens/';

    // TODO: Make this reusable in separate Utilitie
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);

        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }

    doLogin(login: Login) {

        let body = JSON.stringify(login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, body, options)
            .map((res) => {
                return res;
            });
    }

    resetPassword(login: Login) {

        let body = JSON.stringify(login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.citizensUrl, body, options)
            .map((res) => {
                return res;
            });
    }
}
