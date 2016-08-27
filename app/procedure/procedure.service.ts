import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { ProcedureAttachment } from './procedure-attachment';
import { Procedure }   from './procedure';

import {HttpClient} from '../HttpClient';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProcedureService {
        
    private httpCli;
    
    private fileUploadUrl = 'app/procedure/procedures.json';

    private proceduresUrl = 'app/procedure/procedures.json';
    
    constructor(private http:Http){
        this.httpCli = new HttpClient(http);    
    }
   
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
         return this.httpCli.getJson(this.proceduresUrl); 
    }
    
    getProcedures(): Observable<Procedure[]>{
        return this.httpCli.getJson(this.proceduresUrl); 
    }
    getInProgressProcedures():Observable<Procedure[]>{
        return this.httpCli.getJson(this.proceduresUrl+"error");    
    }
}
