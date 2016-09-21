import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
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

    public token: string;
    public userEmail: string;

    constructor(
        public errorHandler: ErrorHandler,
        public http: Http,
        public apiUrl: API_URL,
        public router: Router
    ) { }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }

    doLogin(login: Login) {

        let body = JSON.stringify(login);
        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(this.apiUrl.LOGIN(), body, options)
            .map((res) => {
                if (res["_body"] == "null") {
                    Observable.throw(this.errorHandler.check(res));
                } else {
                }
                // Fixme: Change this ugly thing
                let token = res.headers.values()[0][0];

                if (token) {

                    this.token = token;

                    localStorage.setItem('id_token', this.token);
                    console.log(localStorage.getItem('id_token'));
                }

                return res;
            }).catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            })
    }

    doFunctionaryLogin(login: Login) {

        let body = JSON.stringify(login);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(this.apiUrl.LOGIN(), body, options)
            .map((res) => {

                if (res["_body"] == "null") {
                    Observable.throw(this.errorHandler.check(res));
                } else {

                }

                // Fixme: Change this ugly thing
                let token = res.headers.values()[0][0];

                if (token) {

                    this.token = token;
                    console.log(this.token);

                    localStorage.setItem('id_token', this.token);
                    console.log(localStorage.getItem('id_token'));
                }

                return res;
            }).catch((res) => {
                console.log("ERROR: en  auth.service");
                return Observable.throw(this.errorHandler.check(res));
            })
    }

    doLogout(): void {

        this.token = null;
        localStorage.removeItem('id_token');
    }

    doSignup(signup: Citizen) {

        let body = JSON.stringify(signup);

        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(this.apiUrl.AUTH(), body, options)
            .map((res) => {

                return res;
            }).catch((res) => {

                return Observable.throw(this.errorHandler.check(res));
            })
    }

    resetPassword(login: Login) {

        let body = JSON.stringify(login);

        let options = new RequestOptions({ headers: contentHeaders });


        return this.http.put(this.apiUrl.AUTH(), body, options)

            .map((res) => {
                return res;
            }).catch((res) => {
                return Observable.throw(this.errorHandler.check(res));
            })
    }
}
