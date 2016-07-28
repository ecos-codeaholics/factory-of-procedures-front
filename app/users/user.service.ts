import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { User } from './user';
import { USERS } from './mock-users';


@Injectable()
export class UserService {

    constructor(private http: Http) { }

    private createUserUrl = 'http://127.0.0.1:4567/citizen/create';
    private listUserUrl = 'http://127.0.0.1:4567/citizen/citizenList';

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

    newUser(user: User): Promise<User> {

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.createUserUrl, body, options)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

    getUser(id: number) {
        return this.getUsers()
            .toPromise()
            .then(users => users.find(user => user.id === id));
    }

    getUsers() {

        //return Promise.resolve(USERS);
        let req = new Request({
            method: "GET",
            url: this.listUserUrl
        });

        return this.http.request(req)
            .map(res => res.json());
    }
}
