import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { Citizen } from './citizen';
import { CITIZENS } from './mock-citizen';


@Injectable()
export class CitizenService {

    constructor(private http: Http) { }

    private listCitizenUrl = 'http://127.0.0.1:4567/citizen/citizenList';

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

        //return Promise.resolve(CITIZENS);
        let req = new Request({
            method: "GET",
            url: this.listCitizenUrl
        });

        return this.http.request(req)
            .map(res => res.json());
    }
}
