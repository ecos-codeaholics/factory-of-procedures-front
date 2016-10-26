import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { API_URL } from '../shared/constant/api-url';
import { AuthHttp } from 'angular2-jwt';

import { Citizen } from './citizen';
import { CITIZENS } from './mock-citizen';


@Injectable()
export class CitizenService {

    constructor(
        private http: Http,
        private apiUrl: API_URL,
        private authHttp: AuthHttp
    ) { }

    private citizensUrl = 'http://localhost:4567/citizens/';

    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    getCitizen(id: number) {
        return this.getCitizens()
            .toPromise()
            .then(citizens => citizens.find(citizen => citizen.id === id));
    }

    getCitizens() {

        let req = new Request({
            method: "GET",
            url: this.apiUrl.CITIZENS()
        });

        return this.authHttp.request(req)
            .map(res => res.json());
    }
}
