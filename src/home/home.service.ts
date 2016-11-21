import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { API_URL } from '../shared/constant/api-url';
import { ErrorHandler } from '../shared/error-handler';
import { contentHeaders } from '../shared/constant/content-headers';

import { Stats } from './model/stats';

@Injectable()
export class HomeService {
    private stats: Stats;

    constructor(
        public http: Http,
        public apiUrl: API_URL,
        public errorHandler: ErrorHandler
    ) { }

    getStats(): Observable<Stats> {

        return this.http.get(
            this.apiUrl.STATS() + "basics/")
            .map((res) => {
                return res.json() as Stats;

            })
            .catch((res) => {
                console.log("ERROR: No puedo traer las estadísticas");
                return Observable.throw(this.errorHandler.check(res));
            })
    }
}
