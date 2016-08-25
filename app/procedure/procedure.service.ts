import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { ProcedureAttachment } from './procedure-attachment';
import { Procedure }   from './procedure';

import {HttpClient} from '../HttpClient';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProcedureService {
        
    constructor(private http:Http){}

    private fileUploadUrl = 'app/procedure/procedures.json';

    private proceduresUrl = 'app/procedure/procedures.json';
    
    uploadFile(file: File): Promise<ProcedureAttachment> {
        return new Promise((resolve, reject) => {

            let xhr: XMLHttpRequest = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        resolve(<ProcedureAttachment>JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', this.fileUploadUrl, true);

            let formData = new FormData();
            formData.append("file", file, file.name);

            xhr.send(formData);
        })
    }
    
    getHistProcedures(): Observable<Procedure[]>{
         return this.http.get(this.proceduresUrl).map(this.extractData).catch(this.handleError);  
    }
    
    getProcedures(): Observable<Procedure[]>{
        return this.http.get(this.proceduresUrl).map(this.extractData).catch(this.handleError);
    }
    
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
