import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Login } from './login';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }
    private loginUrl = "http://127.0.0.1:4567/citizen/login";

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

    doLogin(login: Login): Promise<Login> {

        let body = JSON.stringify(login);

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
}
