import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpClient {
    constructor(private http: Http) { }

    public getJson(url) {
        alert("Entre");
        return this.http.get(url).map(this.extractData).catch(this.handleError);
    }
/*
    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }*/
    
    private extractData(res: Response){
        let body= res.json();
        return body.data || {};    
    }
    private handleError (error:any){
        let errMsg = (error.message) ? error.message :
            error.status ?`${error.status} - ${error.statusText}`:'Server error'; 
            console.error("Esto es un error:  "+errMsg);
            alert("Necesito capturar este error en otro lugar "+ errMsg);
            return Observable.throw(errMsg);
    }
    
}