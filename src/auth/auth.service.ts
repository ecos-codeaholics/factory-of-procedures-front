import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { contentHeaders } from '../shared/constant/content-headers';
import { ErrorHandler } from '../shared/error-handler';
import { API_URL } from '../shared/constant/api-url';

import { Login } from './login';
import { Citizen } from '../citizen/citizen';

@Injectable()
export class AuthService {

    token: string;

    constructor(
        public errorHandler: ErrorHandler,
        public http: Http
    ) { }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }

    doLogin(login: Login) {

        let body = JSON.stringify(login);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(API_URL.SESSIONS, body, options)
            .map((res) => {

                // console.log(res);
                // Fixme: Change this ugly thing
                this.token = res.headers.values()[0][0];

                if (this.token) {

                    localStorage.setItem('id_token', this.token);
                    console.log(localStorage.getItem('id_token'));
                }

                return res;
            })
            .catch((res) => {

                if (res["_body"] == "null") {
                    Observable.throw(this.errorHandler.check(res));
                }

                return res;
            }).catch((res) => {

                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            })
    }

    doSignup(signup: Citizen) {

        let body = JSON.stringify(signup);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(API_URL.CITIZENS, body, options)
            .map((res) => {

                return res;
            }).catch((res) => {

                return Observable.throw(this.errorHandler.check(res));
            })
    }

    resetPassword(login: Login) {

        let body = JSON.stringify(login);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.put(API_URL.CITIZENS, body, options)
            .map((res) => {
                return res;
            }).catch((res) => {
                return Observable.throw(this.errorHandler.check(res));
            })
    }
}
