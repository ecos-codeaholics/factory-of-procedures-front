import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { contentHeaders } from '../shared/constant/content-headers';
import { ErrorHandler } from '../shared/error-handler';
import { API_URL } from '../shared/constant/api-url';
import { JwtHelperService } from '../shared/jwt-helper.service';

import { Login } from './login';
import { Citizen } from '../citizen/citizen';

@Injectable()
export class AuthService {

    private token: string;
    private decodedJwt: string;

    private profile: string;
    private user: string;

    private authStatus: Subject<boolean> = new Subject<boolean>();
    private status: boolean;

    constructor(
        public errorHandler: ErrorHandler,
        public jwtHelperService: JwtHelperService,
        public http: Http,
        public apiUrl: API_URL,
        public router: Router
    ) { }

    isAuth() {

        return !!this.token;
    }

    getProfile() {

        return this.profile;
    }

    getUser() {
        return this.user;
    }

    setAuthStatus(status: boolean): void {

        this.status = status;
        this.authStatus.next(status);
    }

    getAuthStatus(): Observable<boolean> {
        return this.authStatus.asObservable();
    }

    doLogin(login: Login) {

        let body = JSON.stringify(login);
        let options = new RequestOptions({ headers: contentHeaders });

        return this.http.post(this.apiUrl.LOGIN(), body, options)
            .map((res) => {

                if (res["_body"] == "null") {

                    Observable.throw(this.errorHandler.check(res));
                }

                // Fixme: Change this ugly thing
                let token = res.headers.values()[0][0]

                if (token) {

                    this.token = token;
                    localStorage.setItem('id_token', this.token);
                    this.decodeData();
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
                }

                // Fixme: Change this ugly thing
                let token = res.headers.values()[0][0];

                if (token) {

                    this.token = token;
                    localStorage.setItem('id_token', this.token);
                    this.decodeData();
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

    decodeData(): void {

        this.decodedJwt = this.jwtHelperService.tokenDecode();
        this.profile = this.decodedJwt['aud'];
        this.user = this.decodedJwt['jti'];
    }

    doLogout(): void {

        this.token = null;
        this.destroyData();
    }

    destroyData(): void {

        this.user = null;
        this.profile = null;
        localStorage.removeItem('id_token');
    }
}
