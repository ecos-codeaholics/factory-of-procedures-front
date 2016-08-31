import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { contentHeaders } from '../shared/constant/content-headers';
import { API_URL } from '../shared/constant/api-url';

import { Login } from './login';
import { Citizen } from '../citizen/citizen';

@Injectable()
export class AuthService {

    constructor(
        public http: Http
    ) { }

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

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(API_URL.SESSIONS, body, options)
            .map((res) => {
                return res;
            });
    }

    doSignup(signup: Citizen) {

        let body = JSON.stringify(signup);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(API_URL.CITIZENS, body, options)
            .map((res) => {
                return res;
            });
    }

    resetPassword(login: Login) {

        let body = JSON.stringify(login);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.put(API_URL.SESSIONS, body, options)
            .map((res) => {
                return res;
            });
    }
}
