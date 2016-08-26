import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Rx';

declare var jQuery:any;

@Injectable()
export class HttpClient {
    constructor(private http: Http) { }

    public getJson(url) {
        return this.http.get(url).map(this.extractData).catch(this.handleError);
    }
    /*
        post(url, data) {
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
            return this.http.post(url, data, {
                headers: head            });
        }*/
    
    public test1() {
        alert("Entre a test1 de HttpClient");
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("Esto es un error:  " + errMsg);

        jQuery("#errMsg").html("Este error: se puede parametrizar y usa JQUERY UI..");
        jQuery("#dialog").dialog();
        return Observable.throw(errMsg);
    }

}